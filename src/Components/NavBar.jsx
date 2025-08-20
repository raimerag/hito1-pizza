import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const total = 25000;
  const token = false;
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">¡Pizzeria Mamma Mia!</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">🍕Home</Nav.Link>

              {token ? (
                <>
                  <Nav.Link href="#features">🔓Profile</Nav.Link>
                  <Nav.Link href="#pricing">🔒Logout</Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="#pricing">🔐Register</Nav.Link>
                  <Nav.Link href="#pricing">🔐Login</Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">🛒 Total: {total}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
