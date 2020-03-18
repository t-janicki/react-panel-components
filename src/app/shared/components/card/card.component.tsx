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
import { green } from "@material-ui/core/colors";
import { AccessAlarm, FavoriteBorder } from "@material-ui/icons";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from "react";

interface Course {
	id: string
	title: string
	subTitle: string
	description: string
	category: string
	length: number
	totalSteps: number
	activeStep: number
	updated: string
	favorite: boolean
}

const course: Course = {
	id: '15459251a6d6b397565',
	title: 'Spring',
	subTitle: 'REST API',
	description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	category: 'web',
	length: 30,
	totalSteps: 11,
	activeStep: 4,
	updated: 'Jun 28, 2017',
	favorite: true
};

const useCardStyle = {
	color: green[500]
};

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

const CardComponent: React.FC = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const buttonStatus = (course: Course) => {
		switch (course.activeStep) {
			case course.totalSteps:
				return 'COMPLETED';
			case 0:
				return 'START';
			default:
				return 'CONTINUE'
		}
	};

	useEffect(() => {
		setIsFavorite(course.favorite)
	}, []);

	return <>
		<div>
			<Card raised elevation={4} className={classes.root}>
				<CardHeader
					avatar={
						<Chip
							label="100/500 points"
							size="small"
						/>
					}
					style={{
						background: useCardStyle.color,
						maxHeight: '5vw',
						color: theme.palette.getContrastText(useCardStyle.color)
					}}
					action={
                        <Chip
                            size="small"
                            label={`${course.length} min`}
                            icon={<AccessAlarm/>}
                        />
					}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{course.subTitle}
					</Typography>
					<Typography>
						{course.description}
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
						{buttonStatus(course)}
					</Button>
				</CardActions>
				<LinearProgress
					variant="determinate"
					value={(course.activeStep * 100 / course.totalSteps)}
				/>
			</Card>
		</div>
	</>
};

export default CardComponent;
