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
import { amber, blue, blueGrey, green, grey, indigo, orange, red, yellow } from "@material-ui/core/colors";
import { AccessAlarm, FavoriteBorder } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from "react";
import { Course } from "./course.model";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 450
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
		title, subTitle, description, category, totalPoints,
		earnedPoints, length, totalSteps, activeStep, updated, favorite
	} = course;

	const classes = useStyles();
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

	const cardHeaderBackground = (): string => {
		switch (category) {
			case 'WEB':
				return 'linear-gradient(40deg, #d32f2f 30%, #ef5350 90%)';
			case 'REACT':
				return 'linear-gradient(40deg, #303f9f 30%, #5c6bc0 90%)';
			case 'SPRING':
				return 'linear-gradient(40deg, #388e3c 30%, #66bb6a 90%)';
			case 'JAVA':
				return 'linear-gradient(40deg, #ffa000 30%, #ffca28 90%)';
			default:
				return 'linear-gradient(40deg, #616161 50%, #bdbdbd 90%)';
		}
	};

	useEffect(() => {
		setIsFavorite(favorite)
	}, [favorite]);

	return <>
		<div>
			<Card raised elevation={4} className={classes.root}>
				<div style={{
					background: cardHeaderBackground(),
					height: '1vw',
				}}/>
				<CardHeader
					avatar={
						<Chip
							label={`${earnedPoints}/${totalPoints}`}
							size="medium"
						/>
					}
					style={{
						background: 'linear-gradient(180deg, #eeeeee 30%, #fafafa 100%)',
						height: '4vw',
					}}
					action={
						<Chip
							size="small"
							label={`${length} min`}
							icon={<AccessAlarm/>}
						/>
					}
				/>
				<Divider/>
				<CardContent style={{maxHeight: '25vw'}}>
					<Typography variant="h5" gutterBottom>
						{title} - {subTitle}
					</Typography>
					<Typography variant="subtitle2"
								gutterBottom
								style={{
									marginBottom: '1vw',
									textAlign: "right"
								}}>
						{updated}
					</Typography>
					<Typography variant="body1" gutterBottom>
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
