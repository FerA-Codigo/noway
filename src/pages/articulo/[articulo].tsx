import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useContext,useEffect,useState } from 'react';
import { NewsData } from '@metronews/store/newsContext';
import { News } from "@metronews/types";

const inter = Inter({ subsets: ['latin'] })

type StaticPropsParams = {
  params: any;
}

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
      <div><h1>{articulo.title}</h1></div>
      <div><h4>{articulo.description}</h4></div>
      <div><p>{articulo.content}</p></div>

    </Container>
  )
}

export default Articulo;


