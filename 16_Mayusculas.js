/*
 * PRIMERA LETRA EN MAYUSCULA
*
* Crear una función que reciba un string y devuelva el mismo string con la primera letra de cada plabra en mayúscula.
* No se pueden utilizar operaciones del lenguaje que lo resuelvan directameten (ej: toUpperCase()).
*
* Ejemplos:
* - primeraLetraMayuscula("hola") -> "Hola"
*
*/

// mayuscula la primera letra de cada palabra
const primeraLetraMayuscula = (str) => {

  const regex = /[^A-zÀ-ú]/g;

  let strArr = str.replace(regex, " ");
  let sinEspacios = quitarEspacios(strArr).trim().split(" ");

  let strArrMayus = sinEspacios.map((palabra) => {
    let palabraArr = palabra.split("");
    palabraArr[0] = palabraArr[0].toUpperCase();
    return palabraArr.join("");
  });

  return strArrMayus.join(" ");
}

// quitar espacios sobrantes entre dos palabras
const quitarEspacios = (str) => {
  let strSinEspacios = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " || str[i + 1] !== " ") {
      strSinEspacios += str[i];
    }
  }
  return strSinEspacios;
};

console.log(primeraLetraMayuscula("??hola    mundo  !   caracola ??"));