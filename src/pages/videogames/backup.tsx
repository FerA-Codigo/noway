import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useContext,useEffect,useState } from 'react';
import { NewsData } from '@metronews/store/newsContext';
import styles from '@metronews/styles/Articulo.module.css';
import Link from 'next/link';
import PublicidadLateral from '@metronews/components/PublicidadLateral';
import fetcherNews from '@metronews/utils/fetcherNews';


type StaticPropsParams = {
  params: any;
}



const Articulo = ({articulo}:any)=> {

  // const { newsData, setNewsData } = useContext(NewsData);
  // const[articulo,setArticulo] = useState({});
  

  // const router = useRouter();
  // const id = router.query.id; 

  // useEffect(() => {
  //   if(newsData[id]){
  //     localStorage.setItem('articulos', JSON.stringify(newsData[id]));
  //     setArticulo(newsData[id]);

  //   }else{
  //     setArticulo(JSON.parse(localStorage.getItem('articulos')));
  //   }
  //   },[])
   

  return (
    <Container>
      <Row>
        <Col md={12} className={`mt-3 ${styles.breadcrumb}`}><p> <Link className={styles.link} href="/">Inicio</Link> / <Link className={styles.link} href="/videogames">Videogames</Link></p></Col>
        <Col md={12} className={`mt-3 mb-2 ${styles.header}`}><h1>{`${articulo.title}`}</h1></Col>
        {/* <Col md={12} className={`mb-3 ${styles.subheadline}`}><h2>{`${articulo.description}`}</h2></Col> */}
        <Col md={12}><hr/></Col>
        <Row>
          <Col md={9} className={`mb-5 ${styles.content}`}>
          <Col md={12} className={`${styles.date}`}><h3>{`${articulo.publishedAt?.substring(0,10)}`}</h3></Col>
          <div className={`mb-3 ${styles.imageArticle}`} style={{backgroundImage:`url('${articulo.image}')`}}></div>
          {/* <h5>Fuente: {articulo.source?.name}</h5> */}
          <p>{`${articulo.content}`}</p>
          <Link className={styles.link} href={`${articulo.url}`} target="_blank">Visitar el artículo en inglés</Link>
          </Col>
          <Col md={3} className={styles.advertising}><PublicidadLateral/></Col>
        </Row>
        <Col md={12}><hr/></Col>
      </Row>
    </Container>
  )
}

export default Articulo;

export async function getServerSideProps({params}:StaticPropsParams) {

  const {id} = params;

  try {
    const articulo = await fetcherNews(`noticia/${id}`);

 return{ props: { articulo } }
  } catch (error) {
    console.error(error);
  }
}