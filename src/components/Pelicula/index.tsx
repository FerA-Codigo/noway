import { Col, Container, Row } from "react-bootstrap";
import styles from '@metronews/styles/Articulo.module.css';
import PublicidadLateral from "../PublicidadLateral";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUser, faFilm, faTag } from '@fortawesome/free-solid-svg-icons';
import YoutubeIframe from "@metronews/utils/YoutubeIframe";

const Pelicula = ({ data }: any) => {
  return (
    <Container>
      <Row>
        <Col md={12} className={`mt-3 mb-2 ${styles.header}`}><h1>{`${data.title}`}</h1></Col>
        {data.description ? <Col md={12} className={`mb-3 ${styles.subheadline}`}><h2>{`${data.description}`}</h2></Col> : null}
        <Col md={12}><hr /></Col>
        <Row>
          <Col md={9} className={`mb-5 ${styles.content}`}>
            <div className={`mb-3 ${styles.imageArticle}`} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data.image}')` }}></div>
            <p>{`${data.content}`}</p>
            <Row>
              <Col md={12}><hr /></Col>
              <Col md={3}><div className={`mb-3 ${styles.imagePoster}`} style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w500/${data.poster}')` }}></div></Col>
              <Col md={9}><Row>
                <Col md={12}><h4><FontAwesomeIcon icon={faTag} className="me-2" /> <strong>Género: </strong> {data.genre}</h4></Col>
                <Col md={12}><hr /></Col>
                <Col md={12}><h4><FontAwesomeIcon icon={faFilm} className="me-2" /> <strong>Dirigida por: </strong> {data.director}</h4></Col>
                <Col md={12}><hr /></Col>
                <Col md={12}><h4><FontAwesomeIcon icon={faUser} className="me-2" /> <strong>Portagonizada por: </strong>  {data.cast}</h4></Col>
                <Col md={12}><hr /></Col>
                <Col md={12}><h4><FontAwesomeIcon icon={faCalendarAlt} className="me-2" /> <strong>Estrena: </strong>  {data.date}</h4></Col>
              </Row></Col>
              <Col md={12}><hr /></Col>
              <Col md={12}>
                <YoutubeIframe videoId={data.video} />
              </Col>
            </Row>
          </Col>
          <Col md={3} className={styles.advertising}><PublicidadLateral /></Col>
        </Row>
        <Col md={12}><hr /></Col>
      </Row>
    </Container>
  )

};

export default Pelicula;