import * as React from 'react'
import Navigation from "./Navigation";
import useLayoutStyles from "./LayoutStyles";
import { useTheme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import LoginComponent from "../components/login/LoginComponent";
import PreferencesComponent from "../components/PreferencesComponent";
import { Role } from "../shared/Role";
import AdminComponent from "../components/AdminComponent";
import PrivateRoute from "../components/PrivateRoute";
import TypographyPage from "../components/TypographyPage";
import HomeComponent from "../components/HomeComponent";

const Layout: React.FC = (): JSX.Element => {
	const classes = useLayoutStyles();
	const theme = useTheme();

	return <>
		<div className={classes.root}>

			<Navigation theme={theme} classes={classes}/>

			<main className={classes.content}>
				<div className={classes.toolbar}/>
				<Switch>
					<Route exact path='/home'>
						<HomeComponent/>
					</Route>
					{/*<Route exact path='/login'>*/}
					{/*	<LoginComponent/>*/}
					{/*</Route>*/}
					<Route exact path='/preferences'>
						<PreferencesComponent/>
					</Route>
					<Route exact path="/typography">
						<TypographyPage/>
					</Route>
					<PrivateRoute path='/admin' roles={[Role.Admin]} Component={AdminComponent}/>
				</Switch>
			</main>
		</div>
	</>
};

export default Layout
