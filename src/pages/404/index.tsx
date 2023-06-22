import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

export default function ErrorPage() {
  return (
    <Container className={`mt-5 mb-5 d-flex flex-column align-items-center`}>
      <Row>
        <Col md={12} ><Image
          src="/img/404.png"
          width={500}
          height={403}
          alt="404"
        /></Col>
      </Row>
      <div><h1>Página no encontrada</h1></div>
    </Container>
  )
}