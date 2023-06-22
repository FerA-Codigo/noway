import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/NewsHome.module.css';
import { useRouter } from 'next/router';


const NewsVideogame = ({ data }: any) => {

    const router = useRouter();

    return (
        <>
            <div className={styles.fondoTitulares}>
                <Container className={styles.contenedorVideogames}>
                    <Row className={`mt-1 mb-3`}>
                        <Col md={8} xs={8}><h3>Videogames</h3></Col>
                        <Col md={4} xs={4} className={`text-right`}><p onClick={() => router.push(`/videogames/`)}>ver más</p></Col>
                    </Row>
                    <Row>
                        {data.slice(0, 3).map((item: any, index: any) => (
                            <Col md={4} sm={12} className={styles.news} key={index} onClick={() => router.push(`/videogames/${item.id}`)}><div className={styles.nota} style={{ backgroundImage: `url('${item.image}')` }}></div><div className={styles.subNota}><h5>{item.title}</h5></div><hr className={`d-md-none`} /></Col>
                        ))}
                    </Row>

                </Container>
            </div>
        </>
    )
};

export default NewsVideogame;