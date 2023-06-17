import { Inter } from 'next/font/google'


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

