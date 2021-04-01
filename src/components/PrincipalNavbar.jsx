import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/PrincipalNavbar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Search from '../components/Search'

const PrincipalNavbar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [search, setSearch] = useState('');
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div id="principal-navbar">
      <Navbar color="dark" dark expand="md">
        
          <Link to="/" className="navbar-brand">
          Phones
          </Link>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-0" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Brands
              </DropdownToggle>
              <DropdownMenu right>
              <Link to="/All">
                <DropdownItem >
                  All
                </DropdownItem>
                </Link>
                <Link to="/Nokia">
                <DropdownItem >
                  Nokia
                </DropdownItem>
                </Link>
                 <Link to="/Samsung">
                <DropdownItem>
                  Samsung
                </DropdownItem>
                </Link>
                <Link to="/Xiaomi">
                <DropdownItem>
                  Xiaomi
                </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Search onChange={onChangeSearch}
          search={search}
          toPushUrl={props.toPushUrl}
          />
          <div className="d-flex ml-auto">
         <Link to="/cart" id="icon-cart" className="nav-link navbar-text icon-cart mr-4 h3 p-0 h-100"></Link>
          <NavbarText>Hello!</NavbarText>
          <Link to="/login" className="nav-link text-light">Login</Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default PrincipalNavbar;