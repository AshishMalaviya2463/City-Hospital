import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const LoginSignup = () => {
    const [regSignFor, setRegSignFor] = useState('register');
    return (
        <>
            {
                regSignFor === 'register' ? <div className="container my-5">
                    <h2 className='mb-4'>Register</h2>
                    <Form>
                        <FormGroup>
                            <Label for="exampleText">
                                Name
                            </Label>
                            <Input
                                id="exampleText"
                                name="name"
                                placeholder="Enter Your Name Here"
                                type="text"
                            />
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
                            />
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
                            />
                        </FormGroup>

                        <Button color="success">
                            Submit
                        </Button>
                    </Form>
                    <div className='mt-3'>
                        <p>
                            If You Have An Account {' '}{' '}
                            <a href="js:" onClick={() => setRegSignFor('login')}>Click Here</a>
                            .
                        </p>
                    </div>
                </div> : <div className="container my-5">
                    <h2 className='mb-4'>Sign In</h2>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="Enter Your E-mail Here"
                                type="email"
                            />
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
                            />
                        </FormGroup>

                        <Button color="success">
                            Submit
                        </Button>
                    </Form>
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
                            <a onClick={()=>setRegSignFor('register')}
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
