import * as React from "react";
import Grid from "@material-ui/core/Grid";
import {
	createStyles,
	makeStyles,
	Theme
} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
	Paper,
	SnackbarContent
} from "@material-ui/core";
import { Lock, LockOpen } from "@material-ui/icons";
import ModuleProgressBar from "./module.progress.bar";
import ModuleButton from "./module.button";

interface TabPanelProps {
	children?: React.ReactNode;
	index: any;
	value: any;
}

const TabPanel = (props: TabPanelProps) => {
	const {children, value, index} = props;

	return (<>
			{value === index && <Box style={{padding: '30px 0px 0px 0px'}} p={3}>{children}</Box>}
		</>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			width: '100%',
			backgroundColor: theme.palette.background.paper,
		},
		main: {
			maxWidth: 900,
			margin: `${theme.spacing(1)}px auto`,
			padding: 0,
		},
	}),
);

const ModuleList: React.FC = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
		setValue(newValue);
	};

	return (<>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container alignItems="flex-start" justify="center" spacing={4}>
						<Grid item xs={9}>
							<Paper className={classes.main} elevation={3}>
								<AppBar position="static" color="default">
									<Tabs
										value={value}
										onChange={handleChange}
										indicatorColor="primary"
										textColor="primary"
										variant="scrollable"
										scrollButtons="auto"
										aria-label="scrollable auto tabs example"
									>
										<Tab label="Module One"/>
										<Tab label="Module Two"/>
										<Tab disabled label="Module Three"/>
										<Tab label="Module Four"/>
										<Tab label="Module Five"/>
										<Tab label="Module Six" />
										<Tab label="Module Seven"/>
									</Tabs>
								</AppBar>
								<TabPanel value={value} index={0}>
									<SnackbarContent
										style={{
											background: 'linear-gradient(40deg, #f5f5f5 10%, #ffffff 90%)',
											// background: '#f5f5f5',
											color: '#7a7a7a',
											marginTop: '3px',
										}}
										message={<Typography>
											{/*<LockOpen style={{marginRight: '20px'}}/>*/}
											'I love candy. I love cookies. I love cupcakes.'
										</Typography>}
										action={<ModuleButton type='completed'/>}
									/>
									<ModuleProgressBar type='completed' activeStep={11} totalSteps={11}/>
									<SnackbarContent
										style={{
											background: 'linear-gradient(40deg, #f5f5f5 10%, #ffffff 90%)',
											// background: '#f5f5f5',
											color: '#7a7a7a',
											marginTop: '3px'
										}}
										message={<Typography>
											{/*<LockOpen style={{marginRight: '20px'}}/>*/}
											'I love candy. I love cookies. I love cupcakes.'
										</Typography>}
										action={<ModuleButton type='continue'/>}
									/>
									<ModuleProgressBar type='continue' activeStep={3} totalSteps={11}/>
									<SnackbarContent
										style={{
											background: 'linear-gradient(40deg, #f5f5f5 10%, #ffffff 90%)',
											color: '#7a7a7a',
											marginTop: '3px'
										}}
										message={<Typography>
											{/*<Lock style={{marginRight: '20px'}}/>*/}
											'I love candy. I love cookies. I love cupcakes.'
										</Typography>}
										action={<ModuleButton type='locked'/>}
									/>
									<ModuleProgressBar type='locked' activeStep={0} totalSteps={11}/>
								</TabPanel>
								<TabPanel value={value} index={1}>
									Item Two
								</TabPanel>
								<TabPanel value={value} index={2}>
									Item Three
								</TabPanel>
								<TabPanel value={value} index={3}>
									Item Four
								</TabPanel>
								<TabPanel value={value} index={4}>
									Item Five
								</TabPanel>
								<TabPanel value={value} index={5}>
									Item Six
								</TabPanel>
								<TabPanel value={value} index={6}>
									Item Seven
								</TabPanel>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
};

export default ModuleList;
