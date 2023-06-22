import Image from "next/image";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

type RespuestaData = {
  info?: any;
}

type Coordinates = {
  latitude: number;
  longitude: number;
};

const FETCH_INTERVAL = 20 * 60 * 1000;

export default function Location() {
  const [respuesta, setRespuesta] = useState<RespuestaData>();

  const fetchData = async () => {
    if ("geolocation" in navigator) {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        const { latitude, longitude } = position.coords;

        const response = await fetch("/api/weather", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ latitud: latitude, longitud: longitude }),
        });

        const data = await response.json();
        setRespuesta(data);
        console.log(respuesta);
      } catch (error) {
        console.error("Error al obtener la geolocalización:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
    console.log(respuesta);
    const interval = setInterval(fetchData, FETCH_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderRespuesta = () => {
    if (respuesta?.info) {
      return (
        <Row>
          <Col md={3}>
            <Image
              src={respuesta.info.icono}
              width={64}
              height={64}
              alt={respuesta.info.estado}
            />
          </Col>
          <Col md={9} className="mt-2">
            <p>
              {respuesta.info.temperatura} {respuesta.info.ubicacion}
            </p>
          </Col>
        </Row>
      );
    }
    return <p></p>;
  };

  return <div>{renderRespuesta()}</div>;
}

