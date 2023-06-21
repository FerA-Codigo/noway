const BASE_URL= 'https://criterioserver.com.ar/';



const fetcherNews = async (ruta:any) => {
    try{
        const response = await fetch (`${BASE_URL}${ruta}?apikey=${process.env.NEWS_KEY}`);
        const data = await response.json();
        return Promise.resolve(data);
        console.log(data)
    } catch (error){
        return Promise.reject(error);
    }
};

export default fetcherNews;