import { Token } from "./token.model";


class TokenService {

	saveToken = (token: Token) => {
		const now = new Date().getTime();
		const expiration = new Date(now + token.expires_in * 1000);

		const session = {
			access_token: token.access_token,
			refresh_token: token.refresh_token,
			duration: token.expires_in,
			expires_at: expiration
		};

		session['expires_at'] = new Date(
			new Date().getTime() + session['duration'] * 1000
		);

		localStorage.setItem('currentUser', JSON.stringify(session))
	};

	getToken = (): string => {
		const token = JSON.parse(localStorage.getItem('currentUser'));
		return token.access_token;
	}
}

const tokenService = new TokenService();

export default tokenService;
