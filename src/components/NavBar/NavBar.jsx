import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CartWidget } from "../CartWidget/CartWidget";
import {} from "./NavBar.css"


const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
    
      
      <Navbar.Brand href="#home" className="barraPrincipal">NavBar E-Commerce </Navbar.Brand>
      <i><CartWidget /></i>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        
        </Nav> 
        <Nav>
           <Nav.Link href="#home">Home</Nav.Link>
           <Nav.Link href="#aboutUs">About Us</Nav.Link>
           <Nav.Link href="#shop">Shop</Nav.Link>
           <Nav.Link eventKey={2} href="#contact">Contact</Nav.Link>
        
        </Nav>
      </Navbar.Collapse>

      </Container>
      
    </Navbar>
    )
}

export default NavBar;