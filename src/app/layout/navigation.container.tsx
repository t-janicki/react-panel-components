import * as React from 'react'
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { Theme } from "@material-ui/core";

interface Props {
	theme: Theme,
	classes: any
}

const NavigationContainer: React.FC<Props> = ({theme, classes}) => {
	const [open, setOpen] = React.useState(true);

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	return <>
		<CssBaseline />
		<AppBar
			position="fixed"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open,
			})}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					className={clsx(classes.menuButton, {
						[classes.hide]: open,
					})}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap>
					Mini variant drawer
				</Typography>
			</Toolbar>
		</AppBar>
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: open,
				[classes.drawerClose]: !open,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: open,
					[classes.drawerClose]: !open,
				}),
			}}
		>
			<div className={classes.toolbar}>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
				</IconButton>
			</div>
			<Divider/>
			<List>
				<ListItem button component={Link} to='/login'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText>Login</ListItemText>
				</ListItem>
				<ListItem button component={Link} to='/home'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText>Home</ListItemText>
				</ListItem>
				<ListItem button component={Link} to='/typography'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText>Typography</ListItemText>
				</ListItem>
				<ListItem button component={Link} to='/preferences'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText>Preferences</ListItemText>
				</ListItem>
				<ListItem button component={Link} to='/admin'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText>Admin</ListItemText>
				</ListItem>
				<ListItem button component={Link} to='/user'>
					<ListItemIcon><SupervisorAccountIcon/></ListItemIcon>
					<ListItemText>User</ListItemText>
				</ListItem>
			</List>
		</Drawer>
	</>
};

export default NavigationContainer
