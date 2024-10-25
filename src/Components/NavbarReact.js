import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";



function OffcanvasExample() {
  return (
    <>
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

<a src="">hey hoda</a>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
