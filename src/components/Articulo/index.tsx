import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/Articulo.module.css';
import PublicidadLateral from "../PublicidadLateral";
import Link from "next/link";

const Articulo = ({data}:any) =>{
    return (
        <Container>
    <Row>
      <Col md={12} className={`mt-3 mb-2 ${styles.header}`}><h1>{`${data.title}`}</h1></Col>
        {data.description?<Col md={12} className={`mb-3 ${styles.subheadline}`}><h2>{`${data.description}`}</h2></Col>:null}
        <Col md={12}><hr/></Col>
        <Row>
          <Col md={9} className={`mb-5 ${styles.content}`}>
          <Col md={12} className={`${styles.date}`}><h3>{`${data.publishedAt?.substring(0,10)}`}</h3></Col>
          <div className={`mb-3 ${styles.imageArticle}`} style={{backgroundImage:`url('${data.image}')`}}></div>
          {/* <h5>Fuente: {articulo.source?.name}</h5> */}
          <p>{`${data.content}`}</p>
          <Link className={styles.link} href={`${data.url}`} target="_blank">Visitar el artículo completo</Link>
          </Col>
          <Col md={3} className={styles.advertising}><PublicidadLateral/></Col>
        </Row>
        <Col md={12}><hr/></Col>
      </Row>
    </Container>
    )
    
};

export default Articulo;