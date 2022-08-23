/*
 *
 * ¿ES UN NÚMERO PRIMO?
 *  *
 * Crear una función que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 *
 * Ejemplos:
 * esPrimo(1) -> false
 * esPrimo(2) -> true
 * esPrimo(3) -> true
 *
 */

// función que se encarga de comprobar si un número es o no primo
const esPrimo = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// imprimir los números primos entre 1 y 100
for (let i = 1; i <= 100; i++) {
  if (esPrimo(i)) {
    console.log(i);
  }
}