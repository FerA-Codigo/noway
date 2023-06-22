import fetcherNews from "@metronews/utils/fetcherNews";
import NewsHome from '@metronews/components/home/newsHome';
import NewsVideogame from "@metronews/components/home/newsVideogame";
import NewsCine from "@metronews/components/home/newsCine";

type HomeProps ={
    jsonNews: any; 
    jsonVideogames: any;
    jsonCine: any;
};



export default function Home({jsonNews, jsonVideogames, jsonCine }:HomeProps){

  return (
  <>  
  <NewsHome data={jsonNews}/>
  <NewsVideogame data={jsonVideogames}/>
  <NewsCine data={jsonCine}/>
  </>
  )
     
}

export async function getServerSideProps() {
    try {
      const jsonNews = await fetcherNews('noticias');
     const jsonVideogames = await fetcherNews('videogames');
     const jsonCine = await fetcherNews('cine');
//      const jsonNews = [
//     {
//         "id": 1,
//         "title": "TikTok se gasta 1.000 millones de dólares en tarjetas gráficas de NVIDIA: todo para entrenar su modelo de IA",
//         "image": "https://i.blogs.es/801c7c/nvidia/840_560.jpeg"
//     },
//     {
//         "id": 2,
//         "title": "Descubierta una fórmula para que los paneles solares puedan generar más energía eléctrica",
//         "image": "https://www.hibridosyelectricos.com/uploads/s1/47/11/50/dos-investigaciones-distintas-han-acabado-en-el-mismo-punto-foto-vecstock-via-freepik_6_489x275.jpeg"
//     },
//     {
//         "id": 3,
//         "title": "‘Armas no letales’: la nueva ley del Congreso “autoriza” equipamiento que ya es utilizado por serenos de Lima",
//         "image": "https://elcomercio.pe/resizer/bRuh_uGiz921fTPIHceuuSjbQi8=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Z54P5RJ2L5CWROHUL4CKDZKG6U.jpg"
//     },
//     {
//         "id": 4,
//         "title": "características, precio y ficha técnica",
//         "image": "https://i.blogs.es/06ee72/r-dam_1483011/840_560.jpeg"
//     },
//     {
//         "id": 5,
//         "title": "Intel tiene un plan para volver a liderar la industria de los chips. Le va a costar un auténtico dineral",
//         "image": "https://i.blogs.es/3ad53d/intel-ap/840_560.jpeg"
//     },
//     {
//         "id": 6,
//         "title": "WhatsApp: enviar GIFs con reproducción automática",
//         "image": "https://depor.com/resizer/ivcOYmN07_vTbbooibBNfX9hegM=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QIEWAKEYTJDOBBWSPSOC5ISODU.jpg"
//     },
//     {
//         "id": 7,
//         "title": "Cómo usar emojis de iPhone en celular Android",
//         "image": "https://depor.com/resizer/r6_HLEyjTfXrt7mEIpbv5QrQvEU=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/WY6HGHNJF5FXTNCFGV6FYB74PI.jpg"
//     },
//     {
//         "id": 8,
//         "title": "¿Cuánto costará Bitcoin (BTC) en 2030?",
//         "image": "https://s32679.pcdn.co/wp-content/uploads/2023/03/bic_Bulls_bullish_2.jpg.webp"
//     },
//     {
//         "id": 9,
//         "title": "Voicebox es el nuevo sistema de IA generativa de voz de Meta. Y es tan bueno que no vas a poder usarlo",
//         "image": "https://i.blogs.es/5839c7/captura-de-pantalla-2023-06-19-a-las-8.46.15/840_560.jpeg"
//     },
//     {
//         "id": 10,
//         "title": "iPhone: funciones que desaparecieron con llegada de iOS 17",
//         "image": "https://depor.com/resizer/FaFGdTiRyesDYPAoAkIrfV-2ERM=/980x528/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/R5JSECOTCZCJ7N7TRXHCYQPCYU.jpg"
//     },
//     {
//         "id": 11,
//         "title": "Miles de empleados utilizan la IA en su trabajo. Cada vez más no quieren que sus jefes lo descubran",
//         "image": "https://i.blogs.es/68b7a1/uso-de-inteligencia-artificial/840_560.jpeg"
//     },
//     {
//         "id": 12,
//         "title": "“Son solo bromas”. Elon Musk se defiende de una demanda de 235.000 millones de euros de la forma más inesperada posible",
//         "image": "https://i.blogs.es/9a3a70/dogecoin-elon-musk-criptomonedas/840_560.jpeg"
//     }
//   ]
   return{ props: { jsonNews, jsonVideogames, jsonCine } }
    } catch (error) {
      console.error(error);
    }
  }

