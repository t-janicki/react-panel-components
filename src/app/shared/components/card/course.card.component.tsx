import * as React from 'react'
import {
	Card,
	Typography,
	CardContent,
	Divider,
	CardActions,
	Button,
	LinearProgress,
	useTheme,
	createStyles,
	Theme, CardHeader,
	IconButton,
	Chip
} from "@material-ui/core";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { blue, green, red, yellow } from "@material-ui/core/colors";
import { AccessAlarm, FavoriteBorder } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from "react";
import { Course } from "./course.model";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 300,
		},
		button: {
			marginLeft: 'auto',
		},
		extendedIcon: {
			marginRight: theme.spacing(1),
		}
	}),
);

interface Props {
	course: Course
}

const CourseCardComponent: React.FC<Props> = ({course}) => {
	const {
		id, title, subTitle, description, category, totalPoints,
		earnedPoints, length, totalSteps, activeStep, updated, favorite
	} = course;

	const classes = useStyles();
	const theme = useTheme();
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const buttonStatus = () => {
		switch (activeStep) {
			case totalSteps:
				return 'COMPLETED';
			case 0:
				return 'START';
			default:
				return 'CONTINUE'
		}
	};

	const cardHeaderBackground = () => {
		switch (category) {
			case 'WEB':
				return red[500];
			case 'REACT':
				return blue[500];
			case 'SPRING':
				return green[500];
			case 'JAVA':
				return yellow[500];
			default:
				return green[500];
		}
	};

	useEffect(() => {
		setIsFavorite(favorite)
	}, [favorite]);

	return <>
		<div>
			<Card raised elevation={4} className={classes.root}>
				<CardHeader
					avatar={
						<Chip
							label={`${earnedPoints}/${totalPoints}`}
							size="small"
						/>
					}
					style={{
						background: cardHeaderBackground(),
						maxHeight: '5vw',
						color: theme.palette.getContrastText(cardHeaderBackground())
					}}
					action={
						<Chip
							size="small"
							label={`${length} min`}
							icon={<AccessAlarm/>}
						/>
					}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{subTitle}
					</Typography>
					<Typography>
						{description}
					</Typography>
				</CardContent>
				<Divider/>
				<CardActions disableSpacing>
					<IconButton
						aria-label="add to favorites"
						onClick={() => setIsFavorite(!isFavorite)}>
						{isFavorite ? <FavoriteIcon/> : <FavoriteBorder/>}
					</IconButton>
					<Button className={clsx(classes.button)}>
						{buttonStatus()}
					</Button>
				</CardActions>
				<LinearProgress
					variant="determinate"
					value={(activeStep * 100 / totalSteps)}
				/>
			</Card>
		</div>
	</>
};

export default CourseCardComponent;
