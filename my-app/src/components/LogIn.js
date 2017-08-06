import React from 'react';
// import './App.css';
import {
  Form,
  FormGroup,
  Col,
  Button,
  FormControl,
  ControlLabel//,
  // Checkbox
} from 'react-bootstrap';

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
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Sign in
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );

    return (
      <div>
        {LogInForm}
      </div>
    );
   
  }
}

export default LogIn;

// final form credentials
// <input type='email' placeholder='email' className="inputEmail"  required></input>
// <input type='password' placeholder='password' className="inputPasswird" required></input>