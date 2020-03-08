import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState } from "react";
import authenticationService from "../../authentication.service";
import Loader from "../../shared/loader";

const PrivateRoute = ({Component, path, exact = false, roles}: Props) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setCurrentUser(authenticationService.currentUserValue);
		setIsLoading(false)
		return () => {
			setCurrentUser(null)
		}
	}, []);

	return (<>
			{isLoading ? <Loader/> :
				<Route exact={exact}
					   path={path}
					   render={(props: RouteComponentProps) => {
					   	   // Not logged in then redirect to login
						   if (!currentUser) {
							   return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
						   }
						   // Role not authorized then redirect to not found?
						   if (roles && roles.some(v => currentUser.roles.indexOf(v) < 0)) {
							   return <Redirect to={{pathname: '/'}}/>
						   }
						   return <Component {...props} />
					   }}/>}
		</>
	)
};

interface Props {
	Component: React.FC<RouteComponentProps> | React.ComponentType<any>
	path: string,
	exact?: boolean,
	roles: string[]
}

export default PrivateRoute;
