/*
 *
 * LOS NÚMEROS PERDIDOS
 *
 * Crear una función donde dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y devuelva todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 * - Si el array está vacío, devuelve un array vacío.
 * - Si el array contiene elementos que no son números, lanza un error.
 * - Si el array contiene elementos repetidos, lanza un error.
 * - Si el array contiene elementos que no son enteros, lanza un error.
 * - Si el array contiene elementos que no están ordenados, lanza un error.
 *
 * Ejemplos:
 * - [1, 2, 3, 4, 5] -> []
 * - [1, 2, 3, 5, 6] -> [4]
 * - [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] -> [4, 10]
 *
 */

const numerosPerdidos = (lista) => {
  if (lista.length === 0) {
    return [];
  }

  const validaciones = Validaciones(lista);
  let listaPerdidos = [];

  if (validaciones === undefined) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i + 1] - lista[i] > 1) {
        for (let j = lista[i] + 1; j < lista[i + 1]; j++) {
          listaPerdidos.push(j);
        }
      }
    }
  }
  else {
    return validaciones;
  }
  return listaPerdidos;
}

const Validaciones = (lista) => {
  // si el array contiene elementos que no son numeros devuelve -1
  for (let i = 0; i < lista.length; i++) {
    if (typeof lista[i] !== "number") {
      return `-1: El elemento "${lista[i]}" no es un número.`;
    }
  }

  // si el array no está ordenada devuelve -1
  for (let i = 0; i < lista.length - 1; i++) {
    if (lista[i] > lista[i + 1]) {
      return `-1: Los elementos no están ordenados.`;
    }
  }

  // si el array contiene elementos repetidos devuelve -1
  for (let i = 0; i < lista.length - 1; i++) {
    if (lista[i] === lista[i + 1]) {
      return `-1: Existen elementos repetidos.`;
    }
  }

  // si el array contiene elementos que no son enteros devuelve -1
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 1 !== 0) {
      return `-1: El elemento "${lista[i]}" no es un número entero.`;
    }
  }
}

let lista = [1, 2, 3, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15];

console.log(numerosPerdidos(lista));

lista = [2, 7];

console.log(numerosPerdidos(lista));