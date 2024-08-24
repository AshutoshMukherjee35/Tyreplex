import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  const navLinks = [
    { name: 'Car Tyres', href: '#' },
    { name: 'Bike Tyres', href: '#' },
    { name: 'Tyre Pressure', href: '#' },
    { name: 'Commercial Tyres', href: '#' },
    { name: 'Accessories', href: '#' },
    { name: 'More', href: '#' },
  ];

  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <span className="logo-text fs-1">Tyre</span><span className="text-danger">Plex</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            {navLinks.map((link, index) => (
              <Nav.Link key={index} href={link.href}>
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <i className="bi bi-person"></i> Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
