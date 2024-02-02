import React from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <div className='login'>
      <nav>
        <h1>LOGO</h1>
      </nav>

      <div className='container'>
        <div className="py-5 px-lg-5 px-sm-3 align-self-center w-100">
          <div className='d-flex flex-column align-items-center'>
            <h2 className='text-uppercase'>Login</h2>
            <p>Login to your account</p>
          </div>
          <div className="justify-content-md-center w-100 ">
            <div className='px-2'>
              <Form className='d-flex flex-column'>
                <div className='pb-2'>
                  {/* <Form.Label>Email address</Form.Label> */}
                  <input className='form-control' type="email" placeholder="Enter email" />
                </div>

                <div className='pb-2'>
                  {/* <Form.Label>Password</Form.Label> */}
                  <input className='form-control' type="password" placeholder="Password" />
                </div>

                <div className="row pb-2 m-0 flex-column flex-sm-row">
                  <div className='col p-0'>
                    <input className="form-check-input" type="checkbox" id="rememberMe" defaultChecked />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>

                  </div>
                  <div className="col p-0 text-sm-end text-sm-start">
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>

                <Button className='align-items-center w-50 align-self-center' variant="primary" type="button" block>
                  Sign in
                </Button>

              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login