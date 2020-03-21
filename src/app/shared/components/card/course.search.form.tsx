import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Clear, Search } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 150,
			lineHeight: 2

		},
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '25ch',
		},
	}),
);


const CourseSearchForm = () => {
	const classes = useStyles();
	const [age, setAge] = React.useState('');
	const handleChange = (event: React.ChangeEvent<{value: unknown}>) => {
		setAge(event.target.value as string);
	};

	const categories = [
		'REACT',
		'JAVA',
		'WEB',
		'SPRING',
		'TYPESCRIPT'
	];

	return (
		<>
			<form>
				<TextField variant="outlined" label="Tytuł" size="small" className={classes.formControl} />
				<FormControl size="small" variant="outlined" className={classes.formControl}>
					<InputLabel>Kategoria</InputLabel>
					<Select
						value={age}
						onChange={handleChange}
						label="Kategoria"
					>
						<MenuItem value="">
							<em>Brak</em>
						</MenuItem>
						{categories.map(value =>
							<MenuItem value={value}>{value}</MenuItem>
						)}
					</Select>
				</FormControl>
				<FormControl size="small" variant="outlined" className={classes.formControl}>
					<InputLabel>Ulubione</InputLabel>
					<Select
						value={age}
						onChange={handleChange}
						label="Ulubione"
					>
						<MenuItem value={0}>
							<em>Tak</em>
						</MenuItem>
						<MenuItem value={1}>
							<em>Nie</em>
						</MenuItem>
					</Select>
				</FormControl>
				<Button className={classes.formControl}
					variant="outlined"
					size="medium"
					startIcon={<Search/>}
					onSubmit={() => console.log('submit')}
				>
					SZUKAJ
				</Button>
				<Button className={classes.formControl}
						variant="outlined"
						size="medium"
						startIcon={<Clear/>}
				>
					WYCZYŚĆ
				</Button>
			</form>
		</>
	);
};

export default CourseSearchForm;
