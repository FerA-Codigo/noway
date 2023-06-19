import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useContext,useEffect,useState } from 'react';
import { NewsData } from '@metronews/store/newsContext';
import styles from '@metronews/styles/Articulo.module.css';
import Link from 'next/link';
import PublicidadLateral from '@metronews/components/PublicidadLateral';


type StaticPropsParams = {
  params: any;
}

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

const Articulo = ({params}:StaticPropsParams)=> {

  const { newsData, setNewsData } = useContext(NewsData);
  const[articulo,setArticulo] = useState({});
  

  const router = useRouter();
  const id = router.query.id; 

  useEffect(() => {
    if(newsData[id]){
      localStorage.setItem('articulos', JSON.stringify(newsData[id]));
      setArticulo(newsData[id]);

    }else{
      setArticulo(JSON.parse(localStorage.getItem('articulos')));
    }
    },[])
   

  return (
    <Container>
      <Row>
        <Col md={12} className={`mt-3 ${styles.breadcrumb}`}><p> <Link className={styles.link} href="/">Inicio</Link> / Novedades</p></Col>
        <Col md={12} className={`mt-3 mb-2 ${styles.header}`}><h1>{`${articulo.title}`}</h1></Col>
        <Col md={12} className={`mb-3 ${styles.subheadline}`}><h2>{`${articulo.description}`}</h2></Col>
        <Col md={12}><hr/></Col>
        <Row>
          <Col md={9} className={`mb-5 ${styles.content}`}>
          <Col md={12} className={`${styles.date}`}><h3>{`${articulo.publishedAt?.substring(0,10)}`}</h3></Col>
          <div className={`mb-3 ${styles.imageArticle}`} style={{backgroundImage:`url('${articulo.image}')`}}></div>
          <h5>Fuente: {articulo.source?.name}</h5>
          <p>{`${articulo.content}`}</p>
          <Link className={styles.link} href={`${articulo.url}`} target="_blank">Visitar el artículo completo</Link>
          </Col>
          <Col md={3} className={styles.advertising}><PublicidadLateral publicidades = {publicidades}/></Col>
        </Row>
        <Col md={12}><hr/></Col>
      </Row>
    </Container>
  )
}

export default Articulo;


