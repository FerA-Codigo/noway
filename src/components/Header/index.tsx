import { Container, Nav, Navbar } from "react-bootstrap";
import Image from 'next/image';
import Location from "./location";
import { NewsData } from '@metronews/store/newsContext';
import { useContext } from "react";

const Header = () =>{

  const newsContext = useContext(NewsData);

  const handleClick = () => {
    
    if (newsContext) {
      newsContext.setPage(1);
    }
  };
  
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
            <Nav.Link href="/noticias" onClick={handleClick}>Noticias</Nav.Link>
            <Nav.Link href="/videogames"  onClick={handleClick}>Videogames</Nav.Link>
            <Nav.Link href="/cine"  onClick={handleClick}>Cine</Nav.Link>
            
          </Nav>
          <Navbar.Text><Location/></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};

export default Header;