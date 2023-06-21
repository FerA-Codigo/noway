import Image from 'next/image';
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

const publicidades = [{
    name:"Codigo Facilito - NextJS",
    image: "publicidad_nextjs.jpg",
    url: "https://codigofacilito.com/"
  },
  {
    name:"PayFun - Pagos Corporativos",
    image: "publicidad_payfun.jpg",
    url: "https://payfun.com.ar/"
  }
]



const PublicidadLateral = () => {
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