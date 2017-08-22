import React from 'react';
import axios from 'axios';
import {
  Form,
  FormGroup,
  Col,
  Button,
  FormControl,
  ControlLabel
} from 'react-bootstrap';

import '../App.css';

class SignUp extends React.Component {
  constructor(){
    super();

    this.collectLogInValue = this.collectLogInValue.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm (event) {
    event.preventDefault();

    // //getting the value from the ref on line 47, would usually be just ref instead of inputRef
    // console.log(this.emailInput.value);

    // console.log('form submit, call axios pass it ');
    //  let signUpInfo = {
    //   email: this.emailInput.value,
    //   pw: this.passwordInput.value
    // }
    // // axios.post( 'http://localhost:8080/login',
    // // axios.post( 'http://localhost:8080/update',
    // axios.post( 'http://localhost:8080/signup',
    //     signUpInfo
    //   )
    //   .then( axiosReturnData => {
    //     // const stateDuplicate = this.state.loggedIn;
    //     console.log(axiosReturnData.data, ' stateData Success');
    //     } )
    //   .catch( err => {
    //     if (err) console.log( err );
    //     alert('your job info sucks');
    //   }); 

  
    console.log(this.props, ' path')
    // this.props.location.pathname.push('/')
  }

  collectLogInValue (event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  render() {
    // log in form with login password and sign up
    const LogInForm = (
        <Form horizontal onSubmit={this.submitForm}>

          <h2 className="text-center">Sign Up Job Seeker</h2>
          <br></br>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={12}>
              <FormControl 
              type="email" 
              placeholder="Email"
              onChange={this.collectLogInValue}
              inputRef={input => { this.emailInput = input; }}
              />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
              <FormControl 
              type="password" 
              placeholder="Password"
              inputRef={input => { this.passwordInput = input; }}
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

export default SignUp;

// final form credentials
// <input type='email' placeholder='email' className="inputEmail" ></input>
// <input type='password' minLength='5' placeholder='password' className="inputPasswird" required></input>