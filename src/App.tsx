import * as React from "react";
import {
	Router,
	Switch,
	Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import authenticationService from "./services/authentication.service";
import { Auth } from "./services/Auth";
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
						<Route exact path='/' component={Layout}/>
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
