import { createStyles, makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const drawerWidth = 340;

export const useCourseStyles = makeStyles(theme => createStyles({
	button: {
		position: 'absolute',
		right: 0,
		top: 160,
		minWidth: 48,
		width: 48,
		height: 48,
		opacity: 0.9,
		padding: 0,
		borderBottomRightRadius: 0,
		borderTopRightRadius: 0,
		zIndex: 999,
		color: theme.palette.getContrastText('#f5f5f5'),
		backgroundColor: '#f5f5f5',
		'&:hover': {
			backgroundColor: '#d4d4d4',
			opacity: 1
		}
	},
	fabBackgroundColor: {
		backgroundColor: '#f5f5f5',
	},
	buttonIcon: {
		color: 'rgba(0, 0, 0, 0.54)',
	},
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		padding: theme.spacing(0, 3),
	},
	main: {
		maxWidth: 900,
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
	},
	footer: {
		maxWidth: 900,
		margin: `${theme.spacing(1)}px auto`,
		padding: theme.spacing(2),
		textAlign: 'center'
	},
	stepLabel: {
		cursor: 'pointer!important'
	},
	successFab: {
		background: `${green[500]}!important`,
		color: 'white!important'
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		justifyContent: 'flex-start',
		height: 71
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
}));
