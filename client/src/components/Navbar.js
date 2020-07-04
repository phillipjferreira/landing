import React from 'react';
import { Container, Button, Navbar as Nav, NavbarBrand } from 'shards-react';
import { NavLink as RouteNavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-dark sticky-top nav-height">
      <Container className="p-0">
        <Nav type="dark" className="p-0 nav-layout">
          <NavbarBrand
            tag={RouteNavLink}
            to="/"
            style={{ lineHeight: '50px', display: 'flex' }}
          >
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1 ml-3 logo-primary"
                style={{ maxWidth: '50px' }}
                src={require('../images/PF-LOGO.svg')}
                alt="PF"
              />
              <span className="d-none d-md-inline ml-1 nav-brand">
                Phillip Ferreira
              </span>
            </div>
          </NavbarBrand>
          <Button className="nav-button">Contact</Button>
        </Nav>
      </Container>
    </div>
  );
};

export default Navbar;
