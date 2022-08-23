/*
 * PALINDROMO
 *
 * Crear una función que reciba un texto y devuelva si es palíndromo o no.
 * Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
 * No se tienen en cuenta espacios, signos de puntuación ni tildes.
 *
 * Ejemplos:
 * - "La ruta nos aporto otro paso natural"
 * - "Anita lava la tina"
 */

const palindromo = (str) => {
  let strSinEspacios = str.replace(/ /g, "");
  let strSinTildes = strSinEspacios.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let strSinSignos = strSinTildes.replace(/[^a-zA-Z ]/g, "");
  let strMinusculas = strSinSignos.toLowerCase();
  let strInvertida = strMinusculas.split("").reverse().join("");

  return strMinusculas === strInvertida;
}

console.log(palindromo("La ruta nos aporto otro paso natural"));