import * as React from 'react'
import {
	FontDownload,
	Home,
	LocalLibrary,
	Settings,
	SupervisorAccount
} from "@material-ui/icons";
import {
	AdminComponent,
	CourseCardLayout,
	HomeComponent,
	PreferencesComponent,
	TypographyComponent
} from "../shared/index";

const navigationRoutes = [
	{
		path: '/home',
		label: 'HOME',
		icon: <Home/>,
		component: <HomeComponent/>,
		exact: true
	},
	{
		path: '/courses',
		label: 'COURSES',
		icon: <LocalLibrary/>,
		component: <CourseCardLayout/>,
		exact: true
	},
	{
		path: '/typography',
		label: 'TYPOGRAPHY',
		icon: <FontDownload/>,
		component: <TypographyComponent/>,
		exact: true
	},
	{
		path: '/preferences',
		label: 'PREFERENCES',
		icon: <Settings/>,
		component: <PreferencesComponent/>,
		exact: true
	},
	{
		path: '/admin',
		label: 'Admin',
		icon: <SupervisorAccount/>,
		component: <AdminComponent/>
	},
	{
		path: '/user',
		label: 'User',
		icon: <SupervisorAccount/>,
		component: <HomeComponent/>
	}
];

export default navigationRoutes;
