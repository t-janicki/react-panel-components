import * as React from 'react'
import { Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import authenticationService from "../services/authentication.service";

const LoginComponent: React.FC = () => {
	return (<>
		<div>
			<LoginPage/>
		</div>
	</>)
};

export default LoginComponent;
