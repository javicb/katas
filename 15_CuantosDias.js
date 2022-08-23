/*
 * CUANTOS DIAS HAY ENTRE DOS FECHAS
*
* Crear una función que calcule y devuelva el número de dias que hay entre dos fechas.
* La función debe recibir dos parámetros, ambas fechas en formato "dd/MM/yyyy".
* La función debe devolver un número entero.
* La diferencia entre días será abosluta, es decir, si la fecha 1 es posterior a la fecha 2, el resultado será positivo.
* Si una de las dos fechas es inválida, la función lanzará una excepción.
*
* Ejemplos:
* - diasEntreFechas("01/01/2022", "01/01/2022") -> 0
* - diasEntreFechas("01/01/2022", "02/01/2022") -> 1
* - diasEntreFechas("02/01/2022", "01/01/2022") -> 1
*
*/

const diasEntreFechas = (fecha1, fecha2) => {

  const fecha1Valida = ComprobarFecha(fecha1);
  const fecha2Valida = ComprobarFecha(fecha2);

  if (fecha1Valida && fecha2Valida) {
    let fecha1Arr = fecha1.split("/");
    let fecha2Arr = fecha2.split("/");
    let fecha1Date = new Date(fecha1Arr[2], fecha1Arr[1] - 1, fecha1Arr[0]);
    let fecha2Date = new Date(fecha2Arr[2], fecha2Arr[1] - 1, fecha2Arr[0]);
    return Dias(fecha1Date, fecha2Date);
  } else {
    throw new Error("Invalid date");
  }
}

function ComprobarFecha(fecha) {
  // Regular expression to check if string is valid date
  const regexExp = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;

  return regexExp.test(fecha);
}

function Dias(fecha1Date, fecha2Date) {
  let diferencia = fecha1Date.getTime() - fecha2Date.getTime();
  let dias = Math.abs(diferencia / (1000 * 3600 * 24));
  return dias;
}

console.log(diasEntreFechas("05/01/2022", "32/01/2022"));
