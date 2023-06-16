import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import Noticias from '@metronews/components/home/newsHome';

const inter = Inter({ subsets: ['latin'] })

import { News } from "@metronews/types";
import fetcherNews from "@metronews/utils/fetcherNews";
import NewsHome from '@metronews/components/home/newsHome';

type HomeProps ={
    jsonNews: News[]; 
};

export default function Home({jsonNews}:HomeProps){
    return (
            
            <NewsHome data={jsonNews.articles}/>

          );
    
}

export async function getServerSideProps() {
    try {
      const jsonNews = await fetcherNews();
   return{ props: { jsonNews } }
    } catch (error) {
      console.error(error);
    }
  }

