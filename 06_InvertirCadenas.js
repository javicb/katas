/*
 *
 * INVIRTIENDO CADENAS
 *
 * Crea una función que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 *
 * Ejemplos:
 * - invertirCadena("Hola mundo") -> "odnum aloH"
 */


const invertirCadena = (cadena) => {
  let invertida = '';
  for (let i = cadena.length - 1; i >= 0; i--) {
    invertida += cadena[i];
  }
  return invertida;
}

console.log(invertirCadena('Hola mundo'));