import { Link  } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CartWidget } from "../CartWidget/CartWidget";
import {} from "./NavBar.css"


const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-4 bg-dark">
      <Container>
      <Link to="/my-app-react/" className="barraPrincipal link">Equipment Vintage Sport Clote</Link>
      
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav className="navCat">
           <Link to="my-app-react/category/Camperas" className="link">Camperas</Link>
           <Link to="my-app-react/category/Camisetas" className="link">Camisetas</Link>
           <Link to="my-app-react/category/Zapatillas" className="link">Zapatillas</Link>
           <Link to="my-app-react/category/Shorts" className="link">Shorts</Link>
           <Link to="my-app-react/carrito" className="link">Carrito</Link>
           <i className="position-relative"><CartWidget /></i>
        </Nav>
       </Navbar.Collapse>
      </Container>
      </Navbar>
    )
}

export default NavBar;

