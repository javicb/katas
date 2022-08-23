/*
 *
 * DECIMAL A BINARIO
 *
 * Crea una función que se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 *
 * Ejemplos:
 * - decimalBinario(10) -> "1010"
 * - decimalBinario(5) -> "101"
 */

const decimalBinario = (numero) => {
  let binario = '';
  while (numero > 0) {
    binario = (numero % 2) + binario;
    numero = Math.floor(numero / 2);
  }
  return binario;
}

console.log(decimalBinario(10));