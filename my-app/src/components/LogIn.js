import React from 'react';
//import axios
import {
  Form,
  FormGroup,
  Col,
  Button,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import '../App.css';

class LogIn extends React.Component {
  constructor(){
    super();

    this.collectLogInValue = this.collectLogInValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (event) {
    event.preventDefault();
    console.log('form submit, call axios pass it ');
    
  }

  collectLogInValue (event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    // log in form with login password and sign up
    const LogInForm = (
        <Form horizontal onSubmit={this.submitForm}>

          <h2 className="text-center">Log In Job Seeker</h2>
          <br></br>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={12}>
              <FormControl 
              type="email" 
              placeholder="Email" 
              placeholder="Enter text"
              onChange={this.collectLogInValue}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
              <FormControl 
              type="password" 
              placeholder="Password"
              required
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button className="expandWidth" bsStyle="info" type="submit">
                Sign in
              </Button>
            </Col>
          </FormGroup>

        </Form >
    );

    return (
      <div>
        <FormGroup className="form-wrap">
          {LogInForm}
        </ FormGroup>
      </div>
    );
  }
}

export default LogIn;
