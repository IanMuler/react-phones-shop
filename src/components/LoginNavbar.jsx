import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/LoginNavbar.css'
import { Navbar} from 'react-bootstrap'


const LoginNavbar = (props) => {

  return (
    <div id={props.id}>
      <Navbar bg="dark" variant="dark" expand="lg">     
          <Link to="/" className="navbar-brand">
          PHONES
          </Link>        
      </Navbar>
      <div className="navbar-transition"></div>
    </div>
  );
}

export default LoginNavbar;