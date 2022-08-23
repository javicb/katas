/*
 * NUMERO ARMSTRONG
 *
 * Crear una función que calcule si un número dado es un número de Armstrong o no.
 *
 * Un número Armstrong es un número natural de n dígitos que es igual a la suma de sus dígitos elevados a la potencia n.
 * Ejemplos:
 * - 153 = 1^3 + 5^3 + 3^3
 * - 370 = 3^3 + 7^3 + 0^3
 * - 371 = 3^3 + 7^3 + 1^3
 * - 407 = 4^3 + 0^3 + 7^3
 */

const armstrong = (num) => {
  let numStr = num.toString();
  let numStrLength = numStr.length;
  let suma = 0;

  for (let i = 0; i < numStrLength; i++) {
    suma += Math.pow(numStr[i], numStrLength);
  }

  return suma === num;
}

console.log(armstrong(150));
