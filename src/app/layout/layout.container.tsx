import * as React from 'react'
import NavigationContainer from './navigation.container'
import { useTheme } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import { Role } from "../auth/model/role";
import useLayoutStyles from "./layout.styles";
import {
	AdminComponent,
	CourseCardComponent,
	CourseCardLayout,
	HomeComponent,
	PreferencesComponent,
	TypographyComponent,
} from "../shared";
import { PrivateRoute } from "../auth";
import CourseComponent from "../shared/components/card/course.component";


const LayoutContainer: React.FC = () => {
	const classes = useLayoutStyles();
	const theme = useTheme();

	return <>
		<div className={classes.root}>

			<NavigationContainer theme={theme} classes={classes}/>

			<main className={classes.content}>
				<div className={classes.toolbar}/>
				<Switch>
					<Route exact path='/home'>
						<HomeComponent/>
					</Route>
					<Route exact path='/course'>
						<CourseComponent/>
					</Route>
					<Route exact path='/card-layout'>
						<CourseCardLayout/>
					</Route>
					<Route exact path='/preferences'>
						<PreferencesComponent/>
					</Route>
					<Route exact path="/typography">
						<TypographyComponent/>
					</Route>
					<PrivateRoute path='/admin' roles={[Role.Admin]} Component={AdminComponent}/>
					<PrivateRoute path='/user' roles={[Role.User, Role.Admin]} Component={HomeComponent}/>
				</Switch>
			</main>
		</div>
	</>
};

export default LayoutContainer;
