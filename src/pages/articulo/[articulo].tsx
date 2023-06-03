import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type StaticPropsParams ={
  params:any;
}

const articulo = ({nombre}:any)=> {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div><h1>{nombre}</h1></div>
    </main>
  )
}

export default articulo;

export async function getStaticProps({params}:StaticPropsParams) {

  const {articulo} = params; 
  const nombre = `Template del artículo: "${articulo}"`;

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