import { Col, Container, Row } from 'react-bootstrap';
import styles from '@metronews/styles/Articulo.module.css';
import Link from 'next/link';
import fetcherNews from '@metronews/utils/fetcherNews';
import Articulo from '@metronews/components/Articulo';


type StaticPropsParams = {
  params: any;
}

const Nota = ({articulo}:any)=> {
  return (
    <>
    <Container>
      <Row>
      <Col md={12} className={`mt-3 ${styles.breadcrumb}`}><p> <Link className={styles.link} href="/">Inicio</Link> / <Link className={styles.link} href="/videogames">Videogames</Link></p></Col>
      </Row>  
    </Container>  
    <Articulo data={articulo}/>
    </>
  )
}


export default Nota;

export async function getServerSideProps({params}:StaticPropsParams) {

  const {id} = params;

  try {
    const articulo = await fetcherNews(`noticia/${id}`);

 return{ props: { articulo } }
  } catch (error) {
    console.error(error);
  }
}