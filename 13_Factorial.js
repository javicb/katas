/*
 * FACTORIAL RECURSIVO
 *
 * Crer una funcion que reciba un numero y devuelva el factorial de ese numero.
 * El factorial de un numero es el producto de todos los numeros enteros positivos desde 1 hasta el numero.
 *
 * EjemploS:
 * - 5! = 5 * 4 * 3 * 2 * 1 = 120
 * - 3! = 3 * 2 * 1 = 6
 * - 1! = 1
 * - 0! = 1
 * - -1! = 1
 */

const factorial = (num) => {
  num = Math.abs(num);
  if (num == 0 || num == 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(-5));