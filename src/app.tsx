import * as React from "react";
import {
	Router,
	Switch,
	Route
} from "react-router-dom"
import history from "./history";
import {
	Auth,
	LoginComponent
} from "./app/auth";
import { Layout } from "./app/layout";

const App: React.FC = () => {

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
