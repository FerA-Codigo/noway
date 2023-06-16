const BASE_URL= 'https://gnews.io/api/v4/top-headlines';



const fetcherNews = async () => {
    try{
        const response = await fetch (`${BASE_URL}?category=technology&lang=es&apikey=${process.env.NEWS_KEY}`);
        const data = await response.json();
        return Promise.resolve(data);
        console.log(data)
    } catch (error){
        return Promise.reject(error);
    }
};

export default fetcherNews;