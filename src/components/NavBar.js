import {Navbar, Container, Nav } from "react-bootstrap";


const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      {/* <img
        src="../public/favicon.ico" 
        width="30"
        height="30"
        className="d-inline-block align-top"
       
      /> */}
      
      <Navbar.Brand href="#home">NavBar E-Commerce</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
           <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#deets">Shop</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;