import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [location, setLocation] = useState({});

 

  
  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            
            setLocation({ latitude, longitude });
        })
    }
}, []);



  return (
    <Container>
      <div><h1>Home</h1></div>
      <div>{JSON.stringify(location)}</div>
    </Container>
  )
}
