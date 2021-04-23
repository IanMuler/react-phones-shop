import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/PrincipalNavbar.css'
import {connect} from 'react-redux';
import Search from '../components/Search'
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap'
import { signOut } from '../actions'


const PrincipalNavbar = (props) => {

const [search, setSearch] = useState('');

const onChangeSearch = (e) => {
setSearch(e.target.value)
}

const { actualUser } = props;

return (
<div id="principal-navbar">
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/">
    <Navbar.Brand>PHONES</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="bg-dark" id="basic-navbar-nav">
      <Nav className="mr-auto">

        <Link to="/" className="ml-4">
        <Navbar.Text>Home</Navbar.Text>
        </Link>
        <NavDropdown className="ml-4" title="Brands" id="basic-nav-dropdown">

          <NavDropdown.Item href="#/Nokia">Nokia</NavDropdown.Item>
          <NavDropdown.Item href="#/Samsung">Samsung</NavDropdown.Item>
          <NavDropdown.Item href="#/Xiaomi">Xiaomi</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#/All">All</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <Search onChange={onChangeSearch} search={search} />
      </Form>
      <div className="d-flex ml-auto row">
        <Link to="/cart" id="icon-cart" className="nav-link navbar-text">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        </Link>
        <Navbar.Text>Hello!</Navbar.Text>

        {Object.keys(actualUser).length !== 0 &&
        <NavDropdown className="login-name" title={actualUser.login.username} id="dropdown-menu-align-right">
          <NavDropdown.Item className="sign-out" onClick={props.signOut}>Sign Out</NavDropdown.Item>
        </NavDropdown>}

        {Object.keys(actualUser).length === 0 &&
        <Link to="/login" className="nav-link text-light">Login</Link>
        }


      </div>
    </Navbar.Collapse>
  </Navbar>
</div>
);
}

const mapStateToProps = state => {
return{
actualUser: state.actualUser
}
}

const mapDispatchToProps = {
signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalNavbar)