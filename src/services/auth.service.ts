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

		axios.post<Token>('http://localhost:8080/oauth/token', body, config)
			.then(response => {

				tokenService.saveToken(response.data);

				return this.userInfo()
			})
			.then(response => {
				currentUserSubject.next(response.data);
			})
			.catch(err => console.log(err))

		// };
	};

	logout = () => {
		localStorage.removeItem('currentUser');
		currentUserSubject.next(null!);
		history.push('/login');
	};

	userInfo = async () => {
		const token = tokenService.getToken();

		if (token) {
			try {
				const result = await axios.get<User>('http://localhost:8080/api/auth/info', {
					headers: {
						'Authorization': `Bearer ${token}`
					},
				});

				return result;
			} catch (e) {
				console.log(e.response)
			}
		}
	};
}

const authService = new AuthService();

export default authService;
