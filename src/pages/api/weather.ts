import type { NextApiRequest, NextApiResponse } from 'next'


export async function obtenerTiempo(lat:any,long:any){
    // const latitud = parseFloat(lat);
    // const longitud = parseFloat(long);
    // try {
    //     const response = await fetch(`https://api.weatherapi2.com/v1/current.json?key=3f75dd9f29a94069abb223600233005&lang=es&q=${latitud},${longitud}&days=5`);
    //     const data = await response.json();
    //     return JSON.parse(data); 
    // }catch(e){
    //     const data = JSON.stringify({ success: false, error: e});
    //     return data;
    
    // }
    const data = 'prueba de devolucion';
    return data;
}     

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
){
    switch(req.method){
        case "GET":
            res.status(200).json({status:200, ciudad:"Córdoba",pais:"Argentina",temp:"27º",estado:"soleado"});
            break;
        case "POST":
            const {latitud,longitud} = req.body;
            const datos = obtenerTiempo(latitud,longitud);
            // const datos = JSON.stringify(data);
            res.status(200).json({status: 404, message:datos})
            
            break;

        default:
            res.status(404).json({status: 404, message:"Not found"})
            break;   
    }
}