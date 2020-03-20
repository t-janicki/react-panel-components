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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { courses } from "./course.dummy.data";
import SwipeableViews from "react-swipeable-views";
import { ArrowBack, ArrowForward, Done } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
	stepLabel: {
		cursor: 'pointer!important'
	},
	successFab: {
		background: `${green[500]}!important`,
		color: 'white!important'
	}
}));

const CourseComponent: React.FC = () => {
	//dummy first course
	const course = courses[0];
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(4);

	const routeParams = useParams();
	const classes = useStyles();
	const pageLayout = useRef(null);

	const handleChangeActiveStep = (index: number) => {
		console.log('handleChangeActiveStep ' + index)
	};

	const handleNext = () => {
		setActiveStep(activeStep +1)
	};

	const handleBack = () => {
		setActiveStep(activeStep -1)
	};

	useEffect(() => {
		setActiveStep(course.activeStep)
	}, [course.activeStep]);


	return (
		<>
			<div>
				{course && <Typography>{course.title}</Typography>}
			</div>
			<SwipeableViews
				className="overflow-hidden"
				index={activeStep - 1}
				enableMouseEvents
				onChangeIndex={handleChangeActiveStep}
			>
				{course.steps.map((step, index) => (
					<div key={step.id}>
						<Paper elevation={1}>
							<div
								dangerouslySetInnerHTML={{__html: step.content}}
								dir={theme.direction}
							/>
						</Paper>
					</div>
				))}
			</SwipeableViews>
			<div>
				<div>
					<div>
						{activeStep !== 1 && (
							<Fab color="secondary" onClick={handleBack}>
								{theme.direction === 'ltr' ? <ArrowBack/> : <ArrowForward/>}
							</Fab>
						)}
					</div>
					<div>
						{activeStep < course.steps.length ? (
							<Fab color="secondary" onClick={handleNext}>
								{theme.direction === 'ltr' ? <ArrowForward/> : <ArrowBack/>}
							</Fab>
						) : (
							<Fab className={classes.successFab} to="#" component={Link}>
								<Done/>
							</Fab>
						)}
					</div>
				</div>
				{course && (
						<Stepper classes={{ root: 'bg-transparent' }} activeStep={activeStep - 1} orientation="vertical">
							{course.steps.map((step, index) => {
								return (
									<Step key={step.id} onClick={() => handleChangeActiveStep(index)}>
										<StepLabel classes={{ root: classes.stepLabel }}>{step.title}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
					)
				}
			</div>
		</>
	)
};

export default CourseComponent;
