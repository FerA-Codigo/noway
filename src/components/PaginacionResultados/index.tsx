import { useRouter } from 'next/router';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '@metronews/styles/NewsHome.module.css';

const Paginacion = ({ resultados, elementosPorPagina,seccion }:any) => {
  const [paginaActual, setPaginaActual] = useState(1);

  const indiceInicial = (paginaActual - 1) * elementosPorPagina;
  const indiceFinal = indiceInicial + elementosPorPagina;
  const resultadosPaginados = resultados.slice(indiceInicial, indiceFinal);

  const avanzarPagina = () => {
    if (paginaActual < obtenerTotalPaginas()) {
      setPaginaActual(paginaActual + 1);
    }
  };

  const retrocederPagina = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const obtenerTotalPaginas = () => Math.ceil(resultados.length / elementosPorPagina);
  const router = useRouter();
  return (
    <>
      {/* Mostrar los resultados paginados en el componente */}
      {resultadosPaginados.map((resultado:any,index:any) => (

        <Col md={12} key={index} >
          <Row className={`d-flex align-items-center`}>
            
            <Col md={4} className={styles.news} onClick={()=>router.push(`/${seccion}/${resultado.id}`)}><div className={styles.nota} style={{backgroundImage:`url('${resultado.image}')`}}></div></Col>
            <Col md={8}><h3 className={styles.news} onClick={()=>router.push(`/${seccion}/${resultado.id}`)}>{resultado.title}</h3></Col>
          </Row>
          <hr/>  
        </Col>


      ))}

      <Col md={12} className={`text-center`}>
      <button className={styles.button} onClick={retrocederPagina} disabled={paginaActual === 1}>
        {`<< `}
      </button> 
      <span style={{color:'#085cdd'}}> Página {paginaActual} de {obtenerTotalPaginas()} </span>
      <button className={styles.button} onClick={avanzarPagina} disabled={paginaActual === obtenerTotalPaginas()}>
      {` >>`}
      </button>
      </Col>
    </>
  );
};

export default Paginacion;