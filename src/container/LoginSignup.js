import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const LoginSignup = () => {
    return (
        <>
            <div className="container my-5">
                <h2 className='mb-4'>Sign Up</h2>
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
                        <NavLink
                            to="/signin"
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

export default LoginSignup
