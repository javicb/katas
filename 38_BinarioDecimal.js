/*
 *
 * BINARIO A DECIMAL
 *
 * Crear una función que se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 *
 * Ej: 1010 => 10
 *
 */

const BinarioADecimal = (binario) => {
  let decimal = 0;
  let potencia = 0;

  for (let i = binario.length - 1; i >= 0; i--) {
    decimal += binario[i] * Math.pow(2, potencia);
    potencia++;
  }

  return decimal;
}

console.log(BinarioADecimal("1010"));
