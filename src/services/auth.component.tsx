import * as React from 'react'
import authenticationService from "../services/authentication.service";
import axios from 'axios'
import authService from "./auth.service";
import tokenService from "./token.service";
import Loader from "../shared/loader";

interface State {
	waitAuthCheck: boolean
}

export class AuthComponent extends React.PureComponent<{}, State> {
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
	    // this.saveFakeToken();
		// authService.refreshToken();

		axios.interceptors.response.use((response) => {
	        return Promise.resolve(response);
	    }, err => {
	    	return new Promise(() => {
	    		console.log(err.response);

	    		if (err.response.status === 401 && tokenService.getRefreshToken()) {
	    			console.log('trying refresh token');
					authService.refreshToken();
				}
	    		throw err
			})

	    })
	};

	currentUser = async () => {
		// this.saveFakeToken()
		await authService.userInfo()
			.then(user => {
				authenticationService.currentUserSubject.next(user)
			})
            .catch(error => {
				console.log(error)
            })
            .finally(() => this.setState({waitAuthCheck: false}))
	};

	componentWillUnmount(): void {
		authenticationService.currentUserSubject.unsubscribe();
	}

	render() {
		return this.state.waitAuthCheck ? <Loader/> : <React.Fragment children={this.props.children}/>;
	}
}
