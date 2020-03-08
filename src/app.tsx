import * as React from "react";
import {
	Router,
	Switch,
	Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import authenticationService from "./app/authentication.service";
import history from "./history";
import {
	Auth,
	LoginComponent
} from "./app/auth";
import { Layout } from "./app/layout";

const App: React.FC = () => {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		// authenticationService.currentUser.subscribe(user => {
		// 	setCurrentUser(user)
		// })

	});

	//create user store
	console.log(authenticationService.currentUserValue)
	// console.log('app current user value')
	// console.log(currentUser)
	return (<>
			<Auth>
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
			</Auth>
		</>
	)
};

export default App;
