import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { Clear, FavoriteBorder, Search } from "@material-ui/icons";
import { Formik } from "formik";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexWrap: 'wrap',
		},
		form: {
			margin: theme.spacing(1),
			minWidth: 150,
			lineHeight: 2
		},
		textField: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			width: '25ch',
		},
	}),
);

interface FormValues {
	title: string
	category: string,
	favorite: boolean
}

const initialValues: FormValues = {
	title: '',
	category: '',
	favorite: false
};

const CourseSearchForm = () => {
	const classes = useStyles();
	const [isFavorite, setIsFavorite] = useState(false);

	const categories = [
		'REACT',
		'JAVA',
		'WEB',
		'SPRING',
		'TYPESCRIPT'
	];

	const onSubmit = (values: FormValues) => {
		console.log(`form values: `);
		console.log(values);
	};

	return (<>
			<Formik<FormValues>
				initialValues={initialValues}
				onSubmit={onSubmit}>
				{({
					  values,
					  resetForm,
					  handleChange,
					  handleBlur,
					  handleSubmit,
					  setFieldValue
				  }) => (
					<form onSubmit={e => {
						e.stopPropagation();
						handleSubmit(e)
					}}>
						<TextField
							className={classes.form}
							variant="outlined"
							label="Tytuł"
							size="small"
							name="title"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.title}
						/>
						<FormControl size="small" variant="outlined" className={classes.form}>
							<InputLabel>Kategoria</InputLabel>
							<Select
								name="category"
								value={values.category || ''}
								onChange={handleChange}
								label="Kategoria"
							>
								<MenuItem value="">
									<em>BRAK</em>
								</MenuItem>
								{categories.map(category =>
									<MenuItem key={category} value={category}>{category}</MenuItem>
								)}
							</Select>
						</FormControl>
						{isFavorite ?
							<Button className={classes.form}
									size="medium"
									variant="outlined"
									onClick={() => {
										setIsFavorite(!isFavorite);
										setFieldValue('favorite', isFavorite)
									}}
									startIcon={<FavoriteBorder color="action"/>
									}>
								ULUBIONE
							</Button>
							:
							<Button className={classes.form}
									size="medium"
									variant="outlined"
									onClick={() => {
										setIsFavorite(!isFavorite);
										setFieldValue('favorite', isFavorite)
									}}
									startIcon={<FavoriteIcon color="action"/>
									}>
								ULUBIONE
							</Button>}
						<Button className={classes.form}
								variant="outlined"
								size="medium"
								startIcon={<Search/>}
								type="submit"
						>
							SZUKAJ
						</Button>
						<Button className={classes.form}
								variant="outlined"
								size="medium"
								onClick={() => {
									resetForm();
									setIsFavorite(true)
								}}
								startIcon={<Clear/>}
						>
							WYCZYŚĆ
						</Button>
					</form>
				)}
			</Formik>
		</>
	);
};

export default CourseSearchForm;
