import React from 'react';
import './Login.css';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Login = () => {
  return (
    <div className='login'>
      <nav>
        <h1>LOGO</h1>
      </nav>

      <div className='bootstrapForm p-5 align-self-center'>
        <div className='d-flex flex-column align-items-center'>
          <h2 className='text-uppercase'>Login</h2>
          <p>Login to your account</p>
        </div>
        <div className="justify-content-md-center w-100 ">
          <div className='px-2'>
            <Form className='d-flex flex-column'>
              {/* Email input */}
              <div className='pb-2'>
                {/* <Form.Label>Email address</Form.Label> */}
                <input className='form-control' type="email" placeholder="Enter email" />
              </div>

              {/* Password input */}
              <div className='pb-2'>
                {/* <Form.Label>Password</Form.Label> */}
                <input className='form-control' type="password" placeholder="Password" />
              </div>

              {/* Checkbox and Forgot password link */}
              <div className="row pb-2 m-0">
                <div className='col p-0'>
                  <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>

                </div>
                <div className='col p-0 text-end'>
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* Submit button */}
              <Button className='align-items-center w-50 align-self-center' variant="primary" type="button" block>
                Sign in
              </Button>

            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login