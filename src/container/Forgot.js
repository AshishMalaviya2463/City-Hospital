import React from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Forgot = () => {
    return (
        <>
            <div className="container my-5">
            <h2 className='mb-4'>Forgot Password</h2>
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
                    <Button color="success">
                        Submit
                    </Button>
                </Form>
                <div className='mt-3'>
                    <p>
                        Back to Sign In page{" "}
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

export default Forgot
