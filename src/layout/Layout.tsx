import * as React from 'react'
import Navigation from "./Navigation";
import Typography from "@material-ui/core/Typography";
import useLayoutStyles from "./LayoutStyles";
import { useTheme } from "@material-ui/core/styles";
import { Route, Switch, withRouter } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import PreferencesComponent from "../components/PreferencesComponent";
import { Role } from "../shared/Role";
import AdminComponent from "../components/AdminComponent";
import PrivateRoute from "../components/PrivateRoute";
import TypographyPage from "../components/TypographyPage";

const Layout: React.FC = (): JSX.Element => {
	const classes = useLayoutStyles();
	const theme = useTheme();

	return <>
		<div className={classes.root}>

			<Navigation theme={theme} classes={classes}/>

			<main className={classes.content}>
				<div className={classes.toolbar}/>
				<Switch>
					<Route exact path='/login' component={LoginComponent}/>
					<Route exact path='preferences' component={PreferencesComponent}/>
					<Route exact path="/typography" component={TypographyPage} />
					<PrivateRoute path='/admin' roles={[Role.Admin]} Component={AdminComponent}/>
				</Switch>
			</main>
		</div>
	</>
};

export default Layout
