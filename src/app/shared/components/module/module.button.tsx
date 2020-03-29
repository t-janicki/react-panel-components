import * as React from 'react'
import { Button, Theme, withStyles } from "@material-ui/core";

interface Props {
	type: 'locked' | 'continue' | 'completed'
}

const ModuleButton: React.FC<Props> = ({type}) => {

	switch (type) {
		case 'locked':
			return <LockedButton disabled> LOCKED </LockedButton>;
		case "continue":
			return <ContinueButton> CONTINUE </ContinueButton>;
		case "completed":
			return <CompletedButton> COMPLETED </CompletedButton>;
	}
};

export default ModuleButton;

const LockedButton = withStyles((theme: Theme) => ({
	root: {
		border: '1px solid #d32f2f',
		backgroundColor: 'transparent',
		fontSize: '0.875rem',
		padding: '5px 15px'
	},
}))(Button);

const ContinueButton = withStyles((theme: Theme) => ({
	root: {
		color: '#ffa000',
		border: '1px solid #ffa000',
		backgroundColor: 'transparent',
		fontSize: '0.875rem',
		padding: '5px 15px'
	},
}))(Button);

const CompletedButton = withStyles((theme: Theme) => ({
	root: {
		color: '#388e3c',
		border: '1px solid #388e3c',
		backgroundColor: 'transparent',
		fontSize: '0.875rem',
		padding: '5px 15px'
	},
}))(Button);
