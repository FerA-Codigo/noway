import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <div><h1>Noticias de videojuegos</h1></div>
    </Container>
  )
}