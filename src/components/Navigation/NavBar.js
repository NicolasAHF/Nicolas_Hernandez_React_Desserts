import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../Cart/CartWidget";
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './NavBar.module.css';
import mealsImage from '../../assets/cakes.jpg';

const NavBarComponent = () => {
  return (<>
    <Navbar bg="primary" expand="lg">
      <Container>
        <Nav.Link href="#home" className={classes.font}>
          Rosas Desserts
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Categorias"
            >
              <NavDropdown.Item href="#categorias/1">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="#categorias/2">Cafes</NavDropdown.Item>
              <NavDropdown.Item href="#categorias/3">Cupcakes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className={classes.image}>
      <img src={mealsImage} />
    </div>
  </>
  );
};

export default NavBarComponent;
