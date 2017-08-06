import React from 'react';
import {
  Form,
  FormGroup,
  Col,
  Button,
  FormControl,
  ControlLabel//,
  // Checkbox
} from 'react-bootstrap';

import '../App.css';

class LogIn extends React.Component {
  constructor(){
    super();

    this.logInFields = this.logInFields.bind(this);
  }

  logInFields(event){
    event.preventDefault();
    console.log('LogInInfo working');
    //using refs in line 83 and 84 to grab inputs
    const LogInInfo = {
      email: this.inputEmail.value,
      pw: this.inputPw.value
    }

    this.props.location.userLogIn.userLogIn(LogInInfo);
    //using ref on line to reset fields
    this.LogInForm.reset();
  }

  render() {
    // sign in form with login password and sign up
    const LogInForm = (
        <Form horizontal>

          <h2 className="text-center">Working example with validation</h2>
          <br></br>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={12}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col sm={12}>
              <FormControl type="password" placeholder="Password" ref={ (input) => {this.inputEmail = input} } required/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col sm={12}>
              <Button className="expandWidth" bsStyle="info" type="button">
                Sign in
              </Button>
            </Col>
          </FormGroup>

        </Form>
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

// final form credentials
// <input type='email' placeholder='email' className="inputEmail"  required></input>
// <input type='password' placeholder='password' className="inputPasswird" required></input>

    // margin: 5% 25%;
    // height: 196px;
    // border: 1px solid lightgrey;
    // padding: 15px;
    // margin-top: 10px;
    // padding-top: 32px;
