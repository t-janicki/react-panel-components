import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState } from "react";
import authenticationService from "../services/authentication.service";

const PrivateRoute = ({Component, path, exact = false, roles}: Props) => {
	// const [currentUser, setCurrentUser] = useState(null);
	//
	// useEffect(() => {
	// 	authenticationService.userInfo()
	// 		.then((data) => setCurrentUser(data))
	// }, []);

	const currentUser = {
		role: 'User'
	}

	console.log(currentUser)
	console.log('private route')
	return (
		<Route exact={exact}
			   path={path}
			   render={(props: RouteComponentProps) => {

				   if (!currentUser) {
				   	console.log('redirect to login')
					   return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
				   }
				   if (roles && roles.indexOf(currentUser.role) === -1) {
					   console.log('redirect to home')
					   return <Redirect to={{pathname: '/'}}/>
				   }
				   return <Component {...props} />
			   }}/>
	)
};

interface Props {
	Component: React.FC<RouteComponentProps> | React.ComponentType<any>
	path: string,
	exact?: boolean,
	roles: string[]
}

export default PrivateRoute;
