import { Link , NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { CartWidget } from "../CartWidget/CartWidget";
import {} from "./NavBar.css"


const NavBar = () => {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
    
      
      <Link to="/my-app-react/" className="barraPrincipal">NavBar E-Commerce </Link>
      <i><CartWidget /></i>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        
        </Nav> 
        <Nav>
           {/* <Link to="/">Home</Link> */}
           <Link to="my-app-react/categoria/Camperas">Camperas</Link>
           <Link to="my-app-react/categoria/Camisetas">Camisetas</Link>
           <Link to="my-app-react/categoria/Zapatillas">Zapatillas</Link>
           <Link to="my-app-react/categoria/Shorts">Shorts</Link>
           <Link to="my-app-react/carrito">Carrito</Link>

        
        </Nav>
      </Navbar.Collapse>

      </Container>
      
    </Navbar>
    )
}

export default NavBar;