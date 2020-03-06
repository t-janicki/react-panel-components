import * as React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router-dom'
import { useEffect, useState } from "react";
import authenticationService from "../services/authentication.service";

const PrivateRoute = ({Component, path, exact = false, roles}: Props) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	/// ADD CLEAN UP RETURN setCurrentUser(null)
	useEffect(() => {
		setCurrentUser(authenticationService.currentUserValue)
		setIsLoading(false)
	}, []);

	return (<>
			{isLoading ? <div>LOADING...</div> :
				<Route exact={exact}
					   path={path}
					   render={(props: RouteComponentProps) => {
						   if (!currentUser) {
							   return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
						   }
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
