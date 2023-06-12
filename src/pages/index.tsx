import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import News from '@metronews/components/home/news';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <section id="titulares"><News/></section>
      <section id="noticias"></section>
      <section id="videogames"></section>
      <section id="movies"></section>
      <section id="libros"></section>
    </Container>
  )
}
