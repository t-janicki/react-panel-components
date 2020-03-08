import axios from "axios";
import { Token } from "./token.model";
import { BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import tokenService from "./token.service";
import history from "../history";
import { Credentials } from "./credentials.model";

const currentUserSubject = new BehaviorSubject(null);

class AuthService {

	login = (credentials: Credentials) => {
		const body = new FormData();
		body.append('grant_type', 'password');
		body.append('username', credentials.email);
		body.append('password', credentials.password);

		const config = {
			auth: {
				username: "client",
				password: "secret"
			},
		};

		axios.post<Token>('/oauth/token', body, config)
			.then(response => {
				tokenService.saveToken(response.data);
				return this.userInfo()
			})
			.then(data => {
				currentUserSubject.next(data);
			})
			.catch(err => console.log(err))
	};

	logout = () => {
		const token = tokenService.getToken();
		axios.put('/oauth/logout', {}, {
			headers: {
				'Authorization': `Bearer ${token}`
			},
		})
			.then(response => {
				console.log(response)
			})
		// .then(() => {
		// 	console.log('remove token')
		// 	localStorage.removeItem('currentUser');
		// 	currentUserSubject.next(null!);
		// 	history.push('/login');
		// })
	};

	refreshToken = () => {
		const config = {
			auth: {
				username: "client",
				password: "secret"
			},
		};

		const body = new FormData();
		body.append('grant_type', 'refresh_token');
		body.append('scope', 'read write');
		body.append('refresh_token', tokenService.getRefreshToken());

		axios.post<Token>('/oauth/token', body, config)
			.then(response => {
				tokenService.saveToken(response.data)
			})
			.catch(e => {
				if (e.response.status === 400) {
					tokenService.removeToken();
					history.push('/')
				}
			})
	};

	isAuthenticated = (): boolean => {
		const expiresAt = tokenService.getExpiredAt();
		return new Date().getTime() < expiresAt;
	};

	userInfo = async () => {
		const token = tokenService.getToken();

		if (token) {
				return await axios.get<User>('/api/auth/info', {
					headers: {
						'Authorization': `Bearer ${token}`
					},
				})
					.then(response => { return response.data })
					.catch(e => { console.log(e) });
		}
	}
}

const authService = new AuthService();

export default authService;
