import Image from 'next/image';
import Link from 'next/link';
import { Router } from 'next/router';
import { Col, Row } from 'react-bootstrap';




const PublicidadLateral = ({publicidades}:any) => {
   return(
        <Row>
            <Col md={12}><h6>Publicidad</h6></Col>

            {publicidades.map((item:any, index:any) => (
                <Col md={12} key={index}>
                <Link href={`${item.url}`} target="_blank"><Image src={`/img/${item.image}`} alt={item.name} width={1200} height={1200}/></Link>
                </Col>
            ))}
        </Row>
    )
}
export default PublicidadLateral