import * as React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import authenticationService from "../services/authentication.service";
import history from "../history";

class LoginPage extends React.Component {

    onSubmit = (username: string, password: string) => {
        authenticationService.login(username, password);
        history.push('/')
    };

    render() {
        return (
            <div>
                <div className="alert alert-info">
                    <strong>Normal User</strong> - U: user P: user<br />
                    <strong>Administrator</strong> - U: admin P: admin
                </div>
                <h2>Login</h2>
                <Formik
                    initialValues={{
                        username: 'user@email.com',
                        password: 'secret'
                    }}
                    validationSchema={Yup.object().shape({
                        username: Yup.string().required('Username is required'),
                        password: Yup.string().required('Password is required')
                    })}
                    onSubmit={({ username, password }) => this.onSubmit(username, password)}
                    render={({ errors, status, touched }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                                <ErrorMessage name="username" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            {status &&
                            <div className={'alert alert-danger'}>{status}</div>
                            }
                        </Form>
                    )}
                />
            </div>
        )
    }
}

export default LoginPage;
