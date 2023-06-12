import { News } from "@metronews/types";
import fetcherNews from "@metronews/utils/fetcherNews";

type HomeProps ={
    jsonNews: News[]; 
};

export default function News({jsonNews}:HomeProps){
    console.log(`Este es el resultado: ${jsonNews}`)
        return (
            <div>
              <h2>Noticias</h2>
               {jsonNews?.map((news, index)=>(
                <div key={index}>
                  <img src={news.image} alt={news.title}/>
                  <h3>{news.title}</h3>
                </div>
              ))} 
            </div>
          );
    
}

export async function getServerSideProps() {
    try {
      const jsonNews = await fetcherNews('category=technology');
   return{ props: { jsonNews } }
    } catch (error) {
      console.error(error);
    }
  }