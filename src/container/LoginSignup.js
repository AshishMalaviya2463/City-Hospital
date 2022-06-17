import React, { useState } from 'react'
import { FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';

const LoginSignup = () => {

    const [regSignFor, setRegSignFor] = useState('register');

    let schema = yup.object().shape({
        name: yup.string().required('Please Enter Name.'),
        email: yup.string().required('Please Enter Email.').email('Please Enter Valid Email.'),
        password: yup.string().required('Please Enter Password.'),
        createdOn: yup.date().default(function () {
            return new Date();
        }),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    let schemaOfLogIn = yup.object().shape({
        email: yup.string().required('Please Enter Email.').email('Please Enter Valid Email.'),
        password: yup.string().required('Please Enter Password.'),
        createdOn: yup.date().default(function () {
            return new Date();
        }),
    });

    const formikOfLogIn = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schemaOfLogIn,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <>
            {
                regSignFor === 'register' ? <div className="container my-5">
                    <h2 className='mb-4'>Register</h2>
                    <Formik values={formik}>
                        <Form onSubmit={formik.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleText">
                                    Name
                                </Label>
                                <Input
                                    id="exampleText"
                                    name="name"
                                    placeholder="Enter Your Name Here"
                                    type="text"
                                    onChange={formik.handleChange}
                                />
                                <p style={{ color: 'red' }}>{formik.errors.name}</p>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Enter Your E-mail Here"
                                    type="email"
                                    onChange={formik.handleChange}
                                />
                                <p style={{ color: 'red' }}>{formik.errors.email}</p>

                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    onChange={formik.handleChange}
                                />
                                <p style={{ color: 'red' }}>{formik.errors.password}</p>

                            </FormGroup>

                            <Button color="success" type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                    <div className='mt-3'>
                        <p>
                            If You Have An Account {' '}{' '}
                            <a href="js:" onClick={() => setRegSignFor('login')}>Click Here</a>
                            .
                        </p>
                    </div>
                </div> : <div className="container my-5">
                    <h2 className='mb-4'>Sign In</h2>
                    <Formik values={formikOfLogIn}>
                        <Form onSubmit={formikOfLogIn.handleSubmit}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Enter Your E-mail Here"
                                    type="email"
                                    onChange={formikOfLogIn.handleChange}
                                />
                                <p style={{ color: 'red' }}>{formikOfLogIn.errors.email}</p>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="Enter Your Password"
                                    type="password"
                                    onChange={formikOfLogIn.handleChange}
                                />
                                <p style={{ color: 'red' }}>{formikOfLogIn.errors.password}</p>
                            </FormGroup>

                            <Button color="success" type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                    <div className='mt-3'>
                        <NavLink
                            to="/forgotpassword"
                        >
                            Forgot Password
                        </NavLink>
                    </div>
                    <div className='mt-3'>
                        <p>
                            If You Are A New User.
                            <br />
                            Create An Account {' '}{' '}
                            <a onClick={() => setRegSignFor('register')}
                                href="js:"
                            >
                                Click Here
                            </a>
                            .
                        </p>
                    </div>

                </div>
            }
        </>
    )
}

export default LoginSignup
