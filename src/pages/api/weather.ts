import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
) {
    switch (req.method) {
        case "GET":
            res.status(404).json({ status: 404, message: "Not found" })
            break;
        case "POST":
            const { latitud, longitud } = req.body;
            const lat = parseFloat(latitud);
            const long = parseFloat(longitud);
            try {
                const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=3f75dd9f29a94069abb223600233005&lang=es&q=${lat},${long}&days=5`);
                const data = await response.json();
                if (data.location) {
                    const info = { ubicacion: `${data.location.name} (${data.location.region})`, temperatura: `${data.current.temp_c}º`, estado: data.current.condition.text, icono: "https:" + data.current.condition.icon, fecha: data.current.last_updated, latitud: lat, longitud: long }
                    return res.status(200).json({ status: 200, info })
                }
                return res.status(400).json({ status: 400, data })

            } catch (e) {
                return res.status(500).json({ status: 500, error: e })
            }


            break;

        default:
            res.status(404).json({ status: 404, message: "Not found" })
            break;
    }
}