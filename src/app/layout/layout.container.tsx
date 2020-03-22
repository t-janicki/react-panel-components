import * as React from 'react'
import { Link, Switch } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid } from "@material-ui/core";
import {
	WrappedRoutes,
	useLayoutStyles,
	navigationRoutes
} from "./index";

const LayoutContainer: React.FC = () => {
	const classes = useLayoutStyles();
	const [value, setValue] = useState('/home');

	const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
		setValue(newValue);
	};

	return <>
		<div className={classes.root}>
			<AppBar position="fixed" color="default" className={classes.appBar}>
				<Toolbar>
					<Grid container justify={"space-evenly"}>
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons="on"
						indicatorColor="primary"
						textColor="primary"
					>
						{navigationRoutes.map((route, index) =>
							<Tab key={index}
								 label={route.label}
								 value={route.path}
								 icon={route.icon}
								 component={Link}
								 to={route.path}/>
						)}
					</Tabs>
					</Grid>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbar} />
			<main className={clsx(classes.content)}>
				<Switch>
					<WrappedRoutes/>
				</Switch>
			</main>
		</div>
	</>
};

export default LayoutContainer;
