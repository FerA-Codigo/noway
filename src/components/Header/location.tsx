import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

export default function Location() {
    const [respuesta, setRespuesta] = useState({});

    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                
                fetch("/api/weather",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({latitud:latitude, longitud:longitude}),
                })
                .then(res => res.json())
                .then( data =>{
                    setRespuesta(data)
                })

            
            })
            
        }
    }, []);

    return(
        <Row>
            <Col md = {3}>  
                <Image src={respuesta.info?.icono} width={64} height={64} decoding= "async" alt={respuesta.info?.estado} />
            </Col>
            <Col md = {9} className="mt-2">
                <p>{respuesta.info?.temperatura}  {respuesta.info?.ubicacion}</p>
            </Col>
      </Row>
    )
}

