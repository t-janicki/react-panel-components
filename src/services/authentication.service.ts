import { BehaviorSubject } from "rxjs";
import axios from 'axios'
import history from "../history";
import { Token } from "./token.model";
import { User } from "./user.model";

const currentUserSubject = new BehaviorSubject(null);

const userInfo = async () => {
	const token = localStorage.getItem('currentUser');

	if (token) {
		try {
			const result = await axios.get<User>('http://localhost:8080/api/auth/info', {
				headers: {
					'Authorization': `Bearer ${token}`
				},
			});
			console.log(result)
			return result;
		} catch (e) {
			console.log(e.response)
		}
	} else {
		logout()
	}
};

const saveSessionToken = (token: Token): void => {
	const now = new Date().getTime();
	const expiration = new Date(now + token.expires_in * 1000);


	const session = {
		access_token: token.access_token,
		refresh_token: token.refresh_token,
		duration: token.expires_in,
		expires_at: expiration
	};

	console.log('in session token')

	console.log(session)
	session['expires_at'] = new Date(
		new Date().getTime() + session['duration'] * 1000
	);

	// this.session = session;
};

const login = async (username: string, password: string) => {
	const body = new FormData();
	body.append('grant_type', 'password');
	body.append('username', username);
	body.append('password', password);

	const config = {
		auth: {
			username: "client",
			password: "secret"
		},
	};

	await axios.post<Token>('http://localhost:8080/oauth/token', body, config)
		.then(response => {
			// saveSessionToken(response.data);
			localStorage.setItem('currentUser', response.data.access_token);
			return userInfo()
		})
		.then(response => {
			currentUserSubject.next(response.data);
		})
		// .then(() => {
		// 	history.push('/home');
		// })
		.catch(err => console.log(err))
};

const logout = () => {
	localStorage.removeItem('currentUser');
	currentUserSubject.next(null!);
	history.push('/');
};

const authenticationService = {
	login,
	logout,
	userInfo,
	currentUser: currentUserSubject.asObservable(),
	get currentUserSubject() {
		return currentUserSubject
	},
	get currentUserValue() {
		return currentUserSubject.value
	}
};

export default authenticationService;
