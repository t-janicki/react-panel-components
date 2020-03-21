import * as React from 'react'
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { courses } from "./course.dummy.data";
import SwipeableViews from "react-swipeable-views";
import { ArrowBack, ArrowForward, Done } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Container, CssBaseline, Grid } from "@material-ui/core";

const drawerWidth = 340;

const useStyles = makeStyles(theme => createStyles({
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

const CourseComponent: React.FC = () => {
	//dummy first course
	const course = courses[0];
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const [open, setOpen] = React.useState(false);

	const routeParams = useParams();
	const classes = useStyles();
	const pageLayout = useRef(null);

	const handleChangeActiveStep = (index: number) => {
		setActiveStep(index + 1);
	};

	const handleNext = () => {
		setActiveStep(activeStep + 1)
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1)
	};

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		setActiveStep(course.activeStep)
	}, [course.activeStep]);

	return (
		<div className={classes.root}>
			<Paper className={classes.main}>
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item xs>
						{course && <Typography>{course.title}</Typography>}
					</Grid>
					<Grid item xs>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerOpen}
							className={clsx(open && classes.hide)}
						>
							<MenuIcon/>
						</IconButton>
					</Grid>
				</Grid>
			</Paper>
			<Paper className={classes.main}>
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item xs>
						<SwipeableViews
							className="overflow-hidden"
							index={activeStep - 1}
							enableMouseEvents
							onChangeIndex={handleChangeActiveStep}
						>
							{course.steps.map((step, index) => (
								<div key={step.id}>
									<Paper elevation={3}>
										<div
											dangerouslySetInnerHTML={{__html: step.content}}
											dir={theme.direction}
										/>
									</Paper>
								</div>
							))}
						</SwipeableViews>
					</Grid>
				</Grid>
			</Paper>
			<Grid container wrap="nowrap" spacing={2} className={classes.footer}>
				<Grid item xs>
					{activeStep !== 1 && (
						<Fab onClick={handleBack}>
							{theme.direction === 'ltr' ? <ArrowBack/> : <ArrowForward/>}
						</Fab>
					)}
				</Grid>
				<Grid item xs>
					{activeStep < course.steps.length ? (
						<Fab onClick={handleNext}>
							{theme.direction === 'ltr' ? <ArrowForward/> : <ArrowBack/>}
						</Fab>
					) : (
						<Fab className={classes.successFab} to="#" component={Link}>
							<Done/>
						</Fab>
					)}
				</Grid>
			</Grid>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.toolbar} />
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
					</IconButton>
				</div>
				<Divider/>
				{course && (
					<Stepper classes={{root: 'bg-transparent'}} activeStep={activeStep - 1} orientation="vertical">
						{course.steps.map((step, index) => {
							return (
								<Step key={step.id} onClick={() => handleChangeActiveStep(index)}>
									<StepLabel classes={{root: classes.stepLabel}}>{step.title}</StepLabel>
								</Step>
							);
						})}
					</Stepper>
				)}
			</Drawer>
		</div>
	)
};

export default CourseComponent;
