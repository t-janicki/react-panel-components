import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useLayoutStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		flexGrow: 1,
		width: '100%',
		// backgroundColor: theme.palette.background.paper,
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		//to delete?
		zIndex: theme.zIndex.drawer + 1,
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	},
	title: {
		flexGrow: 1,
	},
	hide: {
		display: 'none',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 0,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
}));

export default useLayoutStyles;
