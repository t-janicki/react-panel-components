import * as React from 'react'
import { Link, Redirect } from 'react-router-dom'
import authenticationService from "../services/authentication.service";

const HomeComponent: React.FC = (): JSX.Element => {
	return <>
		<div>
			HOME PAGE
			<Link to="/admin">
				<button type="button">
					ADMIN PAGE
				</button>
			</Link>
			{/*{authenticationService.currentUserValue ?*/}
			{/*	<>*/}
			{/*		<button onClick={authenticationService.logout}>LOGOUT</button>*/}
			{/*	</>*/}
			{/*	:*/}
				 <Link to="/login">
				<button type="button" onClick={() => <Redirect to='/login'/>}>
					LOGIN
				</button>
				</Link>

		</div>
	</>
};

export default HomeComponent;
