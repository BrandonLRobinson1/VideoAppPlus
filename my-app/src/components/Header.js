import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

import {
  Navbar,
  NavItem,
  Nav
} from 'react-bootstrap';
import {
  Route,
  Link
} from 'react-router-dom';

// import '../App.css';

class Header extends React.Component {
  // constructor(){
  //   super();
  // }


  render() {
    const navbarInstance = (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Something
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <Link to="/SignUp">
              Sign Up
            </Link>
          </NavItem>
          <NavItem eventKey={2}>
            <Link to="/LogIn">
              Log In
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
    return (
      <div>
        {navbarInstance}
        <Route path="/SignUp" component={SignUp} />
        <Route path="/LogIn" component={LogIn} />
      </div>
    )    
  }
}

export default Header;