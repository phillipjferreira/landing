import React from 'react';
import { Container, Navbar as Nav, NavbarBrand } from 'shards-react';
import { NavLink as RouteNavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-dark sticky-top nav-height">
      <Container className="p-0">
        <Nav
          type="dark"
          className="align-items-stretch flex-md-nowrap p-0"
          expand="md"
        >
          <NavbarBrand
            tag={RouteNavLink}
            to="/"
            style={{ lineHeight: '50px', display: 'flex' }}
          >
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1 ml-3"
                style={{ maxWidth: '50px' }}
                src={require('../images/PF-LOGO.svg')}
                className="color-white"
                alt="PF"
              />
              <span className="d-none d-md-inline ml-1">Phillip Ferreira</span>
            </div>
          </NavbarBrand>
        </Nav>
      </Container>
    </div>
  );
};

export default Navbar;
