import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/LoginNavbar.css'
import {
  Navbar
} from 'reactstrap';

const LoginNavbar = (props) => {

  return (
    <div id={props.id}>
      <Navbar color="dark" dark expand="md">       
          <Link to="/" className="navbar-brand">
          Phones
          </Link>        
      </Navbar>
      <div className="navbar-transition"></div>
    </div>
  );
}

export default LoginNavbar;