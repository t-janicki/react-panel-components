import * as React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useEffect, useState } from "react";
import authenticationService from "./services/authentication.service";
import { Auth } from "./services/Auth";
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
				<Router>
					<Switch>
						<Route path='/'>
							<Layout/>
						</Route>
						{/*<Route exact path='/login' component={LoginComponent}/>*/}
					</Switch>
				</Router>
			</Auth>
		</>
	)
};

export default App;
