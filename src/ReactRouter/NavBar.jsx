import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>


{["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <img className="logoImge" src="ReDe-Craft-logo.png (1).webp" />
            </Navbar.Brand>
            <Form className="Sarceh_bar">
              <Form.Control
                type="search"
                placeholder="Search"
                className="Sar_bar"
                aria-label="Search"
              />
              <Button className="Sachbar_buton">Click</Button>
            </Form>
            <img className="ShoppingCart" src="shopping_cart.png" />
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                {" "}
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {" "}
                  Offcanvas{" "}
                </Offcanvas.Title>{" "}
              </Offcanvas.Header>
              <Offcanvas.Body>
                {" "}
        <Link to="/MainPage"> MainPage</Link> <br />
      <Link to="/Home"> About</Link> <br />
      <Link to="/About"> Home</Link> <br />
      <Link to="/Conteact"> Conteact</Link> <br />
      <Link to="/OrderButton"> OrderButton</Link> <br />
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}





    </nav>
  );
}
