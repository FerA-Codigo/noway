import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Image from 'next/image';
import Location from "./location";

const Header = () =>{
  
    return (
      <Navbar expand="lg" className="sticky-top navbar-menu">
      <Container>
        <Navbar.Brand href="/" style={{paddingBottom:'0px'}}>
        <Image
          src="/img/noway_title.png"
          width={270}
          height={80}
          alt="Picture of the author"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
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
          <Navbar.Text><Location/></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;