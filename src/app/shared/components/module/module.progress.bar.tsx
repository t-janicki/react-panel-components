import * as React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress';
import withStyles from "@material-ui/core/styles/withStyles";

interface Props {
	type: 'locked' | 'continue' | 'completed'
	activeStep: number
	totalSteps: number
}

const ModuleProgressBar: React.FC<Props> = ({type, activeStep, totalSteps}) => {

	switch (type) {
		case "locked":
			return <LockedModuleProgress
				value={(activeStep * 100 / totalSteps)}
				variant='determinate'
			/>;
		case "continue":
			return <ContinueModuleProgress
				value={(activeStep * 100 / totalSteps)}
				variant='determinate'
			/>;
		case "completed":
			return <CompletedModuleProgress
				value={(activeStep * 100 / totalSteps)}
				variant='determinate'
			/>;
	}
};

export default ModuleProgressBar;

const ContinueModuleProgress = withStyles({
	colorPrimary: {
		backgroundColor: '#dfd2b1',
	},
	barColorPrimary: {
		backgroundColor: '#ffa000',
	},
})(LinearProgress);

const CompletedModuleProgress = withStyles({
	colorPrimary: {
		backgroundColor: '#95cc97',
	},
	barColorPrimary: {
		backgroundColor: '#388e3c',
	},
})(LinearProgress);

const LockedModuleProgress = withStyles({
	colorPrimary: {
		backgroundColor: '#dcaaaa',
	},
	barColorPrimary: {
		backgroundColor: '#d32f2f',
	},
})(LinearProgress);
