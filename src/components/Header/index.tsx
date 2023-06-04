import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

const Header = () =>{
  
    return (
      <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">MetroNews</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/videogames">Videogames</Nav.Link>
            <Nav.Link href="/cine">Cine</Nav.Link>
            <Nav.Link href="/libros">Libros</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Navbar.Text>Aca va el Tiempo</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;