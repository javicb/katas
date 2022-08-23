/*
 * LA SUCESIÓN DE FIBONACCI
 *
 * Crer una función que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 0, 1, 1, 2, 3, 5, 8, 13...
 *
 */

// función que imprimra los num primeros números de la sucesión de Fibonacci empezando en 0
const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  }

  let n0 = 0;
  let n1 = 1;
  let fibonacci = 0;

  for (let i = 2; i <= num; i++) {
    console.log(n0)
    fibonacci = n0 + n1;
    n0 = n1;
    n1 = fibonacci;
  }
};

fibonacci(50);