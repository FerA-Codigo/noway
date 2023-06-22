import Paginacion from "@metronews/components/PaginacionResultados";
import PublicidadLateral from "@metronews/components/PublicidadLateral";
import { News } from "@metronews/types";
import fetcherNews from "@metronews/utils/fetcherNews";
import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/Articulo.module.css';
import Link from "next/link";

type HomeProps = {
  jsonNoticias: News[];
};

const ListadoArticulos = ({ jsonNoticias }: HomeProps) => {
  return (
    <Container>
      <Row>
        <Row>
          <Col md={12} className={`mt-3 ${styles.breadcrumb}`}><p><Link className={styles.link} href="/">Inicio</Link>/</p></Col>
        </Row>
        <Col md={12}>
          <h1 className={`mb-2 ${styles.header}`} style={{ color: 'darkblue' }}>Últimas noticias</h1>
          <hr />
        </Col>
        <Row>
          <Col md={9}><Paginacion resultados={jsonNoticias} elementosPorPagina={6} seccion='noticias' /></Col>
          <Col md={3} className={styles.advertising}><PublicidadLateral /></Col>
        </Row>
        <Col md={12}><hr /></Col>
      </Row>
    </Container>
  );
};

export default ListadoArticulos;

export async function getServerSideProps() {
  try {
    const jsonNoticias = await fetcherNews('noticias');

    return { props: { jsonNoticias } }
  } catch (error) {
    console.error(error);
  }
}