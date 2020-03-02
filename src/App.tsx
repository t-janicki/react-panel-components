import * as React from "react";
import {
	Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect, useState } from "react";
import authenticationService from "./services/authentication.service";
import { Role } from "./shared/Role";
import HomeComponent from "./components/HomeComponent";
import LoginComponent from "./components/LoginComponent";
import AdminComponent from "./components/AdminComponent";
import { Auth } from "./services/Auth";
import PreferencesComponent from "./components/PreferencesComponent";
import history from "./history";
import Layout from "./layout/Layout";

const App: React.FC = (): JSX.Element => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		authenticationService.currentUser.subscribe(user => {
			setCurrentUser(user)
		})
	});

	console.log('app current user value')
	console.log(currentUser)
	return (<>
			<Auth>
				<Router history={history}>
					<Switch>
						<Route exact path='/' component={() => <Redirect to='/home'/>}/>
						<Route exact path='/home' component={Layout}/>
						{/*<Route exact path='/login' component={LoginComponent}/>*/}
						{/*<Route exact path='/preferences' component={PreferencesComponent}/>*/}
						{/*<PrivateRoute exact path='/admin' roles={[Role.Admin]} Component={AdminComponent}/>*/}
					</Switch>
				</Router>
			</Auth>
		</>
	)
};

export default App;
