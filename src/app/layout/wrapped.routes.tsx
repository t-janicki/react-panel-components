import * as React from 'react'
import { navigationRoutes } from "./index";
import { Route } from "react-router-dom";
import { PrivateRoute } from "../auth/index";
import { Role } from "../auth/model/role";
import { AdminComponent, HomeComponent } from "../shared/index";
import CourseComponent from "../shared/components/card/course.component";

const WrappedRoutes: React.FC = () => {

	return <>
		{navigationRoutes.map((route) =>
			<Route
				key={route.path}
				exact={route.exact}
				path={route.path}
			>
				{route.component}
			</Route>
		)}
		<Route exact path='/courses/:id'>
			<CourseComponent/>
		</Route>
		<PrivateRoute path='/admin' roles={[Role.Admin]} Component={AdminComponent}/>
		<PrivateRoute path='/user' roles={[Role.User, Role.Admin]} Component={HomeComponent}/>
		</>
};

export default WrappedRoutes;
