/*#############################################
        Importaciones
###############################################*/

//Modulos
//Estilos
import "./NavBar.css";
// Componentes
import CartWidget from "../cartWidget/CartWidget.js";
import { Link } from "react-router-dom";
// LOGO
import logo from '../../assets/img/logo.png'
// Boostrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/*#############################################
        Logica
###############################################*/

const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id = "navbarNav "/>
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/productos">Productos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

/*#############################################
        Exportaciones
###############################################*/

export default NavBar;
