import * as React from "react";
import {
	Router,
	Switch,
	Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import authenticationService from "./services/authentication.service";
import Layout from "./layout/Layout";
import LoginComponent from "./components/login/LoginComponent";
import { AuthComponent } from "./services/auth.component";
import history from "./history";

const App: React.FC = (): JSX.Element => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		// authenticationService.currentUser.subscribe(user => {
		// 	setCurrentUser(user)
		// })

	});

	console.log(authenticationService.currentUserValue)
	// console.log('app current user value')
	// console.log(currentUser)
	return (<>
			<AuthComponent>
				<Router history={history}>
					<Switch>
						<Route exact path='/login'>
							<LoginComponent/>
						</Route>
						<Route path='/'>
							<Layout/>
						</Route>
					</Switch>
				</Router>
			</AuthComponent>
		</>
	)
};

export default App;
