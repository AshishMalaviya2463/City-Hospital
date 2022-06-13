import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
       <div className="container my-5">
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
                    <p>
                        If You Are A New User.
                        <br />
                        Create An Account {' '}{' '}
                        <NavLink
                            to="/login"
                        >
                            Click Here
                        </NavLink>
                        .
                    </p>
                </div>
            </div>
    </>
  )
}

export default Login
