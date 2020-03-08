import { Token } from "./token.model";

class TokenService {

	saveToken = (token: Token): void => {
		let expiresAt = JSON.stringify((token.expires_in * 1000) + new Date().getTime());

		const session = {
			access_token: token.access_token,
			refresh_token: token.refresh_token,
			expires_in: token.expires_in,
			expires_at: expiresAt
		};

		localStorage.setItem('currentUser', JSON.stringify(session))
	};

	removeToken = (): void => {
		localStorage.removeItem('currentUser')
	};

	getExpiredAt = (): number => {
		const token = JSON.parse(localStorage.getItem('currentUser'));
		return token ? token.expires_at : null;
	};

	getToken = (): string => {
		const token = JSON.parse(localStorage.getItem('currentUser'));
		return token ? token.access_token : null;
	};

	getRefreshToken = (): string => {
		const token = (JSON.parse(localStorage.getItem('currentUser')));
		return token ? token.refresh_token : null;
	};
}

const tokenService = new TokenService();

export default tokenService;
