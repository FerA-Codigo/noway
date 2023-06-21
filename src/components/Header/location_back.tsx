import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

// interface RespuestaData {
//     info?: {
//       temperatura: string;
//       icono: any;
//       estado: any;
//       ubicacion: string;
//     };
//   }

  type RespuestaData = {
    info?: any;
  }  

export default function Location() {
    const [respuesta, setRespuesta] = useState<RespuestaData>();

    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;

                console.log(latitude);
                console.log(longitude);
                
                fetch("/api/weather",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({latitud:latitude, longitud:longitude}),
                })
                .then(res => res.json())
                .then( data =>{
                    setRespuesta(data.info)
                })


            
            })
            
        }
    }, []);

    useEffect(() => {
        if(respuesta) {
            
               
        }
    }, [respuesta]);

    return(
        <Row>
            <Col md = {3}>  
                <Image src={respuesta?.info?.icono} width={64} height={64} alt={respuesta?.info?.estado} />
            </Col>
            <Col md = {9} className="mt-2">
                <p>{respuesta?.info?.temperatura}  {respuesta?.info?.ubicacion}</p>
            </Col>
      </Row>
    )
}

