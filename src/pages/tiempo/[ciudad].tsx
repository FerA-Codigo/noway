import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap';

const inter = Inter({ subsets: ['latin'] })

type StaticPropsParams ={
  params:any;
}

const articulo = ({nombre}:any)=> {

  return (
    <Container>
      <div><h1>{nombre}</h1></div>
    </Container>
  )
}

export default articulo;

export async function getStaticProps({params}:StaticPropsParams) {

  const {ciudad} = params; 
  const nombre = `Informe del tiempo segun este dato: "${ciudad}"`;

  return{
      props: {
        nombre,
      }
    }
}

export async function getStaticPaths() {

  return{
      paths: [], //configuración para que no genere pre-rendering de las páginas
      fallback: 'blocking',
  };

}