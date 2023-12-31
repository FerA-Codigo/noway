import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/NewsHome.module.css';
import { useRouter } from 'next/router';

const NewsHome = ({ data }: any) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.fondoTitulares}>
        <Container className={styles.contenedorTitulares}>
          <Row>
            {data[0] && data[0].image && (
              <Col
                md={9}
                className={`d-none d-md-block d-lg-block ${styles.news}`}
                onClick={() => router.push(`/noticias/${data[0].id}`)}
              >
                <div
                  className={styles.titular}
                  style={{ backgroundImage: `url('${data[0].image}')` }}
                >
                  <div className={styles.overlay}>
                    <div className={styles.texto}>
                      <h3>{data[0].title}</h3>
                    </div>
                  </div>
                </div>
              </Col>
            )}
            <Col md={3} sm={12}>
              <Row>
                {data[0] && data[0].image && (
                  <Col
                    md={12}
                    className={`d-md-none ${styles.news}`}
                    onClick={() => router.push(`/noticias/${data[0].id}`)}
                  >
                    <div
                      className={styles.subTitular}
                      style={{ backgroundImage: `url('${data[0].image}')` }}
                    ></div>
                    <div className={styles.subText}>
                      <h5>{data[0].title}</h5>
                    </div>
                    <hr className={`d-md-none`} />
                  </Col>
                )}
                {data[1] && data[1].image && (
                  <Col
                    md={12}
                    className={styles.news}
                    onClick={() => router.push(`/noticias/${data[1].id}`)}
                  >
                    <div
                      className={styles.subTitular}
                      style={{ backgroundImage: `url('${data[1].image}')` }}
                    ></div>
                    <div className={styles.subText}>
                      <h5>{data[1].title}</h5>
                    </div>
                    <hr className={`d-md-none`} />
                  </Col>
                )}
                {data[2] && data[2].image && (
                  <Col
                    md={12}
                    className={styles.news}
                    onClick={() => router.push(`/noticias/${data[2].id}`)}
                  >
                    <div
                      className={styles.subTitular}
                      style={{ backgroundImage: `url('${data[2].image}')` }}
                    ></div>
                    <div className={styles.subText}>
                      <h5>{data[2].title}</h5>
                    </div>
                    <hr className={`d-md-none`} />
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Col md={12}>
          <hr />
        </Col>
        <Row>
          {data.slice(3, 9).map((item: any, index: any) =>
            item.image ? (
              <Col
                md={4}
                sm={12}
                className={styles.news}
                key={index}
                onClick={() => router.push(`/noticias/${item.id}`)}
              >
                <div
                  className={styles.nota}
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className={styles.subNota}>
                  <h5>{item.title}</h5>
                </div>
                <hr className={`d-md-none`} />
              </Col>
            ) : null
          )}
        </Row>
        <Col md={12} className={`d-none d-md-block d-lg-block`}>
          <hr />
        </Col>
      </Container>
    </>
  );
};

export default NewsHome;