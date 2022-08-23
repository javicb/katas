/*
 *
 * CONTANDO PALABRAS
 *
 * Crear una functión que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Ejemplos:
 * - contarPalabras("Hola mundo") -> "Hola: 1, mundo: 1"
 * - contarPalabras("Hola mundo, hola mundo") -> "Hola: 2, mundo: 2"
 */

const contarPalabras = (cadena) => {
  const palabras = cadena.replace(/[^a-zA-Z ]/g, '').toLowerCase().split(' ');
  const palabrasContadas = {};
  palabras.forEach((palabra) => {
    if (palabrasContadas[palabra]) {
      palabrasContadas[palabra]++;
    } else {
      palabrasContadas[palabra] = 1;
    }
  });
  return palabrasContadas;
}

console.log(contarPalabras('Hola mundo'));
console.log(contarPalabras('Hola mundo, hola mundo'));
console.log(contarPalabras("Hola, mi nombre es John. Mi nombre completo es John Doe."));