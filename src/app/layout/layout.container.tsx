import * as React from 'react'
import { useTheme } from "@material-ui/core/styles";
import { Link, Route, Switch } from "react-router-dom";
import { Role } from "../auth/model/role";
import useLayoutStyles from "./layout.styles";
import {
	AdminComponent,
	CourseCardLayout,
	HomeComponent,
	PreferencesComponent,
	TypographyComponent,
} from "../shared";
import { PrivateRoute } from "../auth";
import CourseComponent from "../shared/components/card/course.component";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontDownload, Home, LocalLibrary, Settings, SupervisorAccount } from "@material-ui/icons";

function a11yProps(index: any) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	};
}

const LayoutContainer: React.FC = () => {
	const classes = useLayoutStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};
	const routes = [
		'/home',
		'/preferences',
		'/course',
		'/card-layout',
		'/typography',
		'/admin',
		'user'
	];
	return <>
		<div className={classes.root}>
			<CssBaseline/>
			<AppBar position="fixed" color="default" className={classes.appBar}>
				<Toolbar>
					<Tabs
						value={value}
						onChange={handleChange}
						variant="scrollable"
						scrollButtons="on"
						indicatorColor="primary"
						textColor="primary"
						aria-label="scrollable force tabs example"
					>
						<Tab label="HOME" value="/home" icon={<Home/>}
							 component={Link} to={routes[0]} {...a11yProps(0)} />

						<Tab label="PREFERENCES" value="/preferences" icon={<Settings/>}
							 component={Link} to={routes[1]} {...a11yProps(1)} />

						<Tab label="COURSE" value="/course" icon={<LocalLibrary/>}
							 component={Link} to={routes[2]} {...a11yProps(2)} />

						<Tab label="CARD-LAYOUT" value="/card-layout" icon={<LocalLibrary/>}
							 component={Link} to={routes[3]} {...a11yProps(3)} />

						<Tab label="TYPOGRAPHY" value="/typography" icon={<FontDownload/>}
							 component={Link} to={routes[4]} {...a11yProps(4)} />

						<Tab label="ADMIN" value="/admin" icon={<SupervisorAccount/>}
							 component={Link} to={routes[5]} {...a11yProps(5)} />

						<Tab label="USER" value="/user" icon={<SupervisorAccount/>}
							 component={Link} to={routes[6]} {...a11yProps(6)} />
					</Tabs>
				</Toolbar>
			</AppBar>
			<div className={classes.toolbar} />
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<Switch>
					<Route exact path={routes[0]}>
						<HomeComponent/>
					</Route>
					<Route exact path={routes[1]}>
						<PreferencesComponent/>
					</Route>
					<Route exact path={routes[2]}>
						<CourseComponent/>
					</Route>
					<Route exact path={routes[3]}>
						<CourseCardLayout/>
					</Route>
					<Route exact path={routes[4]}>
						<TypographyComponent/>
					</Route>
					<PrivateRoute path={routes[5]} roles={[Role.Admin]} Component={AdminComponent}/>
					<PrivateRoute path={routes[6]} roles={[Role.User, Role.Admin]} Component={HomeComponent}/>
				</Switch>
			</main>
		</div>
	</>
};

export default LayoutContainer;
