import * as React from 'react'
import UserStore from '../../user/store/user.store'
import axios from 'axios'
import { Loader } from "../../shared";
import {
	TokenService,
	AuthService
} from "../";

interface State {
	waitAuthCheck: boolean
}

class AuthContainer extends React.PureComponent<{}, State> {
	constructor(props: Readonly<{}>) {
		super(props);

		this.init();
		this.currentUser();

		this.state = {
			waitAuthCheck: true
		};
	}

	saveFakeToken = (): void => {
		const session = {
			access_token: 'c5c41fdf-0f70-4beb-839e-f504a8156b09',
			refresh_token: 'd200dd52-2ed5-424a-9c13-fd41e477bddf',
			expires_in: 6070,
			expires_at: '1583589296'
		};

		localStorage.setItem('currentUser', JSON.stringify(session))
	};

	init = () => {
		console.log('interceptor');

		axios.interceptors.response.use((response) => {
			return Promise.resolve(response);
		}, err => {
			return new Promise(() => {
				//TO FIX
				if (err.response.status === 401 && TokenService.getRefreshToken()) {
					console.log('trying refresh token');
					AuthService.refreshToken();
				}
				throw err
			})

		})
	};

	currentUser = () => {
		// this.saveFakeToken()
		AuthService.userInfo()
			.then(user => {
				UserStore.setCurrentUserSubject(user);
			})
			.catch(error => {
				console.log(error)
			})
			.finally(() => this.setState({waitAuthCheck: false}))
	};

	componentWillUnmount(): void {
		UserStore.cancelSubscription();
	}

	render() {
		return this.state.waitAuthCheck ? <Loader/> : <React.Fragment children={this.props.children}/>;
	}
}

export default AuthContainer;
