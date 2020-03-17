import * as React from 'react'
import {
	Card,
	Typography,
	Icon,
	CardContent,
	Divider,
	CardActions,
	Button,
	LinearProgress,
	useTheme,
	createStyles,
	Theme, CardHeader, Avatar, IconButton
} from "@material-ui/core";
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";
import { green, blue } from "@material-ui/core/colors";
import { AccessAlarm, FavoriteBorder } from "@material-ui/icons";
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";

interface Course {
	id: string
	title: string
	slug: string
	description: string
	category: string
	length: number
	totalSteps: number
	activeStep: number
	updated: string
	steps: any
	favorite: boolean
}

const course: Course = {
	id: '15459251a6d6b397565',
	title: 'Spring Security',
	slug: 'basics-of-angular',
	description: 'Commits that need to be pushed lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	category: 'web',
	length: 30,
	totalSteps: 11,
	activeStep: 4,
	updated: 'Jun 28, 2017',
	steps: null,
	favorite: true
};

const useCardStyle = {
	color: green[500]
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			maxWidth: 345,
		},
		media: {
			height: 0,
			paddingTop: '56.25%', // 16:9
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: 'rotate(180deg)',
		},
		avatar: {
			backgroundColor: blue[500],
		},
	}),
);

const CardComponent: React.FC = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [favorite, setFavorite] = useState<boolean>(false);

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
		setFavorite(course.favorite)
	},[]);

	return <>
		<div>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Avatar>R</Avatar>
					}
					style={{
						background: useCardStyle.color,
						minHeight: '4vw',
						color: theme.palette.getContrastText(useCardStyle.color)
					}}
					action={
						<>
							{/*<IconButton aria-label="settings">*/}
							<AccessAlarm aria-label="settings"/>
							<Typography>
								{`~ ${course.length} min`}
							</Typography>
							{/*</IconButton>*/}
						</>
					}
					title={course.title}
					// subheader={course.updated}
				/>
				<CardContent>
					<Typography>
						{course.title}
					</Typography>
					<Typography>
						{course.updated}
					</Typography>
				</CardContent>
				<Divider/>
				<CardActions disableSpacing>
					<IconButton
						aria-label="add to favorites"
						onClick={() => setFavorite(!favorite)}>
						{favorite ? <FavoriteIcon/> : <FavoriteBorder/>}
					</IconButton>
					<Button className={clsx(classes.expand)}>
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
