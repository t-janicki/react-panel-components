import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CourseCardComponent, PaginationComponent } from "../../index";
import {courses} from './course.dummy.data';

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

const CourseCardLayout: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				spacing={2}
				direction="row"
				justify="flex-start"
				alignItems="flex-start"
			>
				{courses.map(course => (
					<Grid item xs={12} sm={12} md={4} key={course.id}>
						<CourseCardComponent course={course}/>
					</Grid>
				))}
			</Grid>
			<Grid container justify="center">
				<PaginationComponent totalPages={courses.length}/>
			</Grid>
		</div>
	);
};

export default CourseCardLayout;
