import { BehaviorSubject } from "rxjs";
import axios from 'axios'
import history from "../history";
import { Token } from "./token.model";
import { User } from "./user.model";

const currentUserSubject = new BehaviorSubject(null);



// const userInfo = async () => {
// 	const token = localStorage.getItem('currentUser');
//
// 	if (token) {
// 		try {
// 			const result = await axios.get<User>('http://localhost:8080/api/auth/info', {
// 				headers: {
// 					'Authorization': `Bearer ${token}`
// 				},
// 			});
// 			console.log(result)
// 			return result;
// 		} catch (e) {
// 			console.log(e.response)
// 		}
// 	} else {
// 		logout()
// 	}
// };

// const login = (email: string, password: string) => {
// 	const body = new FormData();
// 	body.append('grant_type', 'password');
// 	body.append('username', email);
// 	body.append('password', password);
// 	console.log(email)
// 	const config = {
// 		auth: {
// 			username: "client",
// 			password: "secret"
// 		},
// 	};
//
// 	axios.post<Token>('http://localhost:8080/oauth/token', body, config)
// 		.then(response => {
// 			// saveSessionToken(response.data);
// 			localStorage.setItem('currentUser', response.data.access_token);
//
// 			const now = new Date().getTime();
// 			const expiration = new Date(now + response.data.expires_in * 1000);
// 			console.log(expiration)
// 			console.log(response.data.expires_in)
//
// 			return userInfo()
// 		})
// 		.then(response => {
// 			currentUserSubject.next(response.data);
// 		})
// 		// .then(() => {
// 		// 	history.push('/home');
// 		// })
// 		.catch(err => console.log(err))
// };



const authenticationService = {
	// login,
	// logout,
	// userInfo,
	currentUser: currentUserSubject.asObservable(),
	get currentUserSubject() {
		return currentUserSubject
	},
	get currentUserValue() {
		return currentUserSubject.value
	}
};

export default authenticationService;
