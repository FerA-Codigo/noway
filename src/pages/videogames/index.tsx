import Paginacion from "@metronews/components/PaginacionResultados";
import PublicidadLateral from "@metronews/components/PublicidadLateral";
import { News } from "@metronews/types";
import fetcherNews from "@metronews/utils/fetcherNews";
import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/Articulo.module.css';
import Link from "next/link";

type HomeProps = {
  jsonVideogames: News[];
};

const ListadoArticulos = ({ jsonVideogames }: HomeProps) => {
  return (
    <Container>
      <Row>
        <Row>
          <Col md={12} className={`mt-3 ${styles.breadcrumb}`}><p><Link className={styles.link} href="/">Inicio</Link>/</p></Col>
        </Row>
        <Col md={12}>
          <h1 className={`mb-2 ${styles.header}`} style={{ color: 'darkblue' }}>Videogames</h1>
          <hr />
        </Col>
        <Row>
          <Col md={9}><Paginacion resultados={jsonVideogames} elementosPorPagina={6} seccion='videogames' /></Col>
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
    const jsonVideogames = await fetcherNews('videogames');

    return { props: { jsonVideogames } }
  } catch (error) {
    console.error(error);
  }
}