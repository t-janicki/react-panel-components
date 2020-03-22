import * as React from 'react'
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { courses } from "./course.dummy.data";
import SwipeableViews from "react-swipeable-views";
import { ArrowBack, ArrowForward, Done } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Grid } from "@material-ui/core";
import { useCourseStyles } from "./course.styles";

const CourseComponent: React.FC = () => {
	//dummy first course
	const course = courses[0];
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const [open, setOpen] = useState(true);

	const classes = useCourseStyles();

	const handleChangeActiveStep = (index: number) => {
		setActiveStep(index);
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
			<Button className={classes.button} variant="contained" onClick={handleDrawerOpen}>
				<MenuIcon className={classes.buttonIcon}/>
			</Button>
			<Paper className={classes.main} elevation={3}>
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item xs>
						{course && <Typography>{course.title}</Typography>}
					</Grid>
				</Grid>
			</Paper>
			<Paper className={classes.main} elevation={3}>
				<Grid container wrap="nowrap" spacing={2}>
					<Grid item xs>
						<SwipeableViews
							className="overflow-hidden"
							index={activeStep}
							enableMouseEvents
							onChangeIndex={handleChangeActiveStep}
						>
							{course.steps.map(step => (
									<div
										key={step.id}
										dangerouslySetInnerHTML={{__html: step.content}}
										dir={theme.direction}/>
							))}
						</SwipeableViews>
					</Grid>
				</Grid>
			</Paper>
			<Grid container wrap="nowrap" spacing={2} className={classes.footer}>
				<Grid item xs>
					{activeStep !== 1 && (
						<Fab onClick={handleBack} className={classes.fabBackgroundColor}>
							{theme.direction === 'ltr' ?
								<ArrowBack className={classes.buttonIcon}/>
								:
								<ArrowForward className={classes.buttonIcon}/>}
						</Fab>
					)}
				</Grid>
				<Grid item xs>
					{activeStep < course.steps.length ? (
						<Fab onClick={handleNext} className={classes.fabBackgroundColor}>
							{theme.direction === 'ltr' ?
								<ArrowForward className={classes.buttonIcon}/>
								:
								<ArrowBack className={classes.buttonIcon}/>
							}
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
					<Stepper classes={{root: 'bg-transparent'}} activeStep={activeStep} orientation="vertical">
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
