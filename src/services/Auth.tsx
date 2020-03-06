import * as React from 'react'
import authenticationService from "../services/authentication.service";
import axios, { AxiosResponse } from 'axios'

interface State {
	waitAuthCheck: boolean
}

export class Auth extends React.PureComponent<{}, State> {
	constructor(props: Readonly<{}>) {
		super(props);

		this.state = {
			waitAuthCheck: true
		};
	}

	// init = () => {
	//
	//     console.log('interceptor')
	//     axios.interceptors.response.use((response: AxiosResponse) => {
	//         console.log(response);
	//         return Promise.resolve(response);
	//     }, err => {
	//         console.log(err)
	//
	//         return Promise.reject(err);
	//     })
	// };

	currentUser = () => {
		authenticationService.userInfo()
			.then((response) => {
				authenticationService.currentUserSubject.next(response.data)
				// console.log(authenticationService.currentUserValue)
			})
            .catch(error => {
			console.log(error)
            })
            .finally(() => this.setState({waitAuthCheck: false}))
	};

	componentWillUnmount(): void {
		authenticationService.currentUserSubject.unsubscribe();
	}

	async componentDidMount() {
		await this.currentUser()
	}

	render() {
		return this.state.waitAuthCheck ? <div> LOADING... </div> : <React.Fragment children={this.props.children}/>;
	}
}
