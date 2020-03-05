import * as React from "react";
import { Formik } from 'formik';
import * as Yup from 'yup'
import authenticationService from "../../services/authentication.service";
import history from "../../history";
import {
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography
} from "@material-ui/core";
import { useLoginStyles } from "./LoginStyles";

const validationSchema = Yup.object().shape({
	email: Yup.string().required('Email is required'),
	password: Yup.string().required('Password is required')
});

interface FormValues {
	email: string,
	password: string
}

const initialValues: FormValues = {
	email: '',
	password: ''
};

const LoginPage: React.FC = () => {
	const classes = useLoginStyles();

	const onSubmit = (values: FormValues) => {
		console.log(values)
		authenticationService.login(values.email, values.password);
		history.push('/')
	};

	return (
		<Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<Formik initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={onSubmit}
						render={({
									 values,
									 touched,
									 errors,
									 handleChange,
									 handleBlur,
									 handleSubmit,
									 isValid
								 }) => (
							<form onSubmit={e => {
								e.stopPropagation();
								handleSubmit(e)
							}}>
								<TextField
									variant="outlined"
									label="E-mail"
									name="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									helperText={(errors.email && touched.email) && errors.email}
									margin="normal"
									fullWidth
									error={touched.email && Boolean(errors.email)}
								/>
								<TextField
									variant="outlined"
									label="Password"
									name="password"
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									helperText={(errors.password && touched.password) && errors.password}
									margin="normal"
									fullWidth
									error={touched.password && Boolean(errors.password)}
								/>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									disabled={!isValid}
									className={classes.submit}
								>
									Logowanie
								</Button>
							</form>
						)}/>
				<Grid container>
					<Grid item xs>
						<Link href="#" variant="body2">
							Forgot password?
						</Link>
					</Grid>
					<Grid item>
						<Link href="#" variant="body2">
							{"Don't have an account? Sign Up"}
						</Link>
					</Grid>
				</Grid>
			</div>
		</Container>
	)
};

export default LoginPage;
