import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { CardComponent, PaginationComponent } from "../../index";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
	}),
);

const CardLayout: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs>
					<CardComponent/>
				</Grid>
				<Grid item xs>
					<CardComponent/>
				</Grid>
				<Grid item xs>
					<CardComponent/>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs>
					<CardComponent/>
				</Grid>
				<Grid item xs>
					<CardComponent/>
				</Grid>
				<Grid item xs>
					<CardComponent/>
				</Grid>
			</Grid>
			<Grid container spacing={3}>
				<Grid item xs>
					<CardComponent/>
				</Grid>
				<Grid item xs>
					<CardComponent/>
				</Grid>
				<Grid item xs>
					<CardComponent/>
				</Grid>
			</Grid>
			<Grid container justify="center">
				<PaginationComponent/>
			</Grid>
		</div>
	);
};

export default CardLayout;
