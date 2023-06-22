import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/NewsHome.module.css';
import { useRouter } from 'next/router';

const NewsCine = ({ data }: any) => {
  const router = useRouter();

  return (
    <div className={styles.fondoCine}>
      <Container className={styles.contenedorCine}>
        <Row className={`mt-1 mb-3`}>
          <Col md={8} xs={8}>
            <h3>Lo que se viene en el cine</h3>
          </Col>
          <Col md={4} xs={4} className={`text-right`}>
            <p onClick={() => router.push(`/cine/`)}>ver más</p>
          </Col>
        </Row>
        <Row>
          {data.length > 0 && data[0].image && (
            <Col
              md={8}
              className={`d-none d-md-block d-lg-block ${styles.news}`}
              onClick={() => router.push(`/cine/${data[0].id}`)}
            >
              <div
                className={styles.titular}
                style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data[0].image}')` }}
              >
                <div className={styles.overlay}>
                  <div className={styles.texto}>
                    <h3>{data[0].title}</h3>
                  </div>
                  <div className={styles.texto}>
                    <p>{data[0].description}</p>
                  </div>
                </div>
              </div>
            </Col>  
          )}
          {data.length > 0 && data[0].image && (
            <Col md={8} className={`d-md-none ${styles.news}`} onClick={() => router.push(`/cine/${data[0].id}`)}><div className={styles.subTitular} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data[0].image}')` }}></div><div className={styles.subText}><h5>{data[0].title}</h5></div><hr className={`d-md-none`} /></Col>
          )}
          <Col md={4} sm={12}>
            <Row>
              {data.length > 0 &&
                data.slice(1, 3).map((item: any, index: any) => (
                  <Col
                    md={12}
                    className={styles.news}
                    key={index}
                    onClick={() => router.push(`/cine/${item.id}`)}
                  >
                    {item.image && (
                      <>
                        <div
                          className={styles.subTitular}
                          style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${item.image}')` }}
                        ></div>
                        <div className={styles.subText}>
                          <h5>{item.title}</h5>
                        </div>
                        <hr className={`d-md-none`} />
                      </>
                    )}
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewsCine;