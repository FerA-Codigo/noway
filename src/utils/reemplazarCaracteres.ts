export default function ReemplazarCaracteres(texto:string) {
    const reemplazos = { ' ': '-', '%': 'por ciento' };
    const caracteres = Object.keys(reemplazos);
  
    const nuevaCadena = caracteres.reduce((cadena, caracter) => {
      return cadena.replace(new RegExp('\\' + caracter, 'g'), reemplazos[caracter]);
    }, texto);
  
    return nuevaCadena;
  }