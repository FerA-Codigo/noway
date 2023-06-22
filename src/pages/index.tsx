import fetcherNews from "@metronews/utils/fetcherNews";
import NewsHome from '@metronews/components/home/newsHome';
import NewsVideogame from "@metronews/components/home/newsVideogame";
import NewsCine from "@metronews/components/home/newsCine";

type HomeProps = {
  jsonNews: any;
  jsonVideogames: any;
  jsonCine: any;
};



export default function Home({ jsonNews, jsonVideogames, jsonCine }: HomeProps) {

  return (
    <>
      <NewsHome data={jsonNews} />
      <NewsVideogame data={jsonVideogames} />
      <NewsCine data={jsonCine} />
    </>
  )

}

export async function getServerSideProps() {
  try {
    const jsonNews = await fetcherNews('noticias');
    const jsonVideogames = await fetcherNews('videogames');
    const jsonCine = await fetcherNews('cine');

    return { props: { jsonNews, jsonVideogames, jsonCine } }
  } catch (error) {
    console.error(error);
  }
}

