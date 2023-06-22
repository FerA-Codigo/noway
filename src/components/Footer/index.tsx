import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="container-fluid footer">
            <Container>
                <Row>
                    <Col md={4} className="mt-3 mb-3 ">
                        <Image src="/img/noway-footer.png" width={270} height={80} alt="NoWay" />
                        <p>Ezine de Tecnología y Entretenimiento</p>
                    </Col>
                    <Col md={4} className="mt-3 mb-3"></Col>
                    <Col md={4} className="mt-3 mb-3"></Col>
                </Row>
            </Container>
            <div className='bottom-text'>
                <p>© Fernando Amor 2023 - Trabajo Final Bootcamp NextJS Código Facilito</p>
            </div>
        </footer>)
};

export default Footer;