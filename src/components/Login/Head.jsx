import React from 'react';
import { Link } from 'react-router-dom';
import '../Login/Head.css';
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from '../Assets/sit2.png';
import '../Login/Head.css';


const Head = () => {
  return (
    <>
      <Navbar className='nav-top' expand="lg" sticky="top" >
        <Container fluid>

          <Navbar.Brand href="#home" >
            <img
              src={logo}
              alt="Sumago Logo"
              style={{ height: "80px", width: "100%", zoom: "0.5" }}
              className="d-inline-block align-top m-0"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link as={Link} to="/home" className="px-4 ms-5 ">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="px-4">About</Nav.Link>
              <Nav.Link as={Link} to="/schedule" className="">Schedule Visit</Nav.Link>
              <Nav.Link as={Link} to="/feedback" className="px-4">Feedback</Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="px-4">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/agenda" className="px-4">Agenda</Nav.Link>
              <Nav.Link as={Link} to="/fees" className="px-4">Pending Fees</Nav.Link>
            </Nav>

            <div className="d-flex gap-2">
              {/* Notifications button */}
              <Link to="/notifications">
                <Button variant="outline-light" aria-label="Notifications">
                  <i className="bi bi-bell"></i>
                </Button>
              </Link>

              {/* Account button */}
              <Link to="/account">
                <Button variant="outline-light" aria-label="Account">
                  <i className="bi bi-person-circle"></i>
                </Button>
              </Link>

              {/* Login button */}
              <Link to="/login">
                <Button variant="outline-light" aria-label="Login">
                  <i className="bi bi-box-arrow-in-right"></i>
                </Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container >
      </Navbar >




    </>
  );
};

export default Head;