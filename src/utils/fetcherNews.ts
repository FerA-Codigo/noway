const BASE_URL= 'https://gnews.io/api/v4/top-headlines';



const fetcherNews = async (queryParams?: string) => {
    try{
        const response = await fetch (`${BASE_URL}?apikey=${process.env.API_KEY}lang=es&${queryParams}}`);
        const data = await response.json();
        return Promise.resolve(data);
        console.log(data)
    } catch (error){
        return Promise.reject(error);
    }
};

export default fetcherNews;