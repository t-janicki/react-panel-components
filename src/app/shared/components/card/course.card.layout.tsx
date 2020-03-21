import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CourseCardComponent, PaginationComponent } from "../../index";
import { courses } from './course.dummy.data';
import CourseSearchForm from "./course.search.form";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
			padding: theme.spacing(0, 3),
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: 'center',
			color: theme.palette.text.secondary,
		},
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	}),
);

const CourseCardLayout: React.FC = () => {
	const classes = useStyles();

	return (<>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container alignItems="flex-start" justify="center" spacing={4}>
						<Grid item>
							<CourseSearchForm/>
						</Grid>
					</Grid>
					<Grid container alignItems="flex-start" justify="center" spacing={4}>
						{courses.map(course =>
							<Grid key={course.id} item>
								<CourseCardComponent course={course}/>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>
			<Grid container justify="center">
				<PaginationComponent totalPages={2}/>
			</Grid>
		</>
	);
};

export default CourseCardLayout;
