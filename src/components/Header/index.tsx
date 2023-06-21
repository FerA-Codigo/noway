import { Container, Nav, Navbar } from "react-bootstrap";
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
          alt="noway"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/noticias">Noticias</Nav.Link>
            <Nav.Link href="/videogames">Videogames</Nav.Link>
            <Nav.Link href="/cine">Cine</Nav.Link>
            <Nav.Link href="/libros">Libros</Nav.Link>
          </Nav>
          <Navbar.Text><Location/></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;