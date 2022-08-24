/*
 *
 * ORDENA LA LISTA
 *
 * Crear una función que ordene y devuelva una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 * - El resultado será una nueva matriz ordenada.
 * - Si no se recibe el parámetro "Asc" o "Desc", se devolverá la matriz sin ordenar.
 * - Si la matriz está vacía, se devolverá la matriz vacía.
 * - Si la matriz contiene elementos que no son números, se devolverá la matriz sin ordenar.
 *
 * Ejemplos:
 * - lista = [2, 4, 6, 8, 9], orden = "Asc" -> [2, 4, 6, 8, 9]
 * - lista = [2, 4, 6, 8, 9], orden = "Desc" -> [9, 8, 6, 4, 2]
 * - lista = [2, 6, 4, 9, 8], orden = "asc" -> [2, 4, 6, 8, 9]
 * - lista = [2, 6, 4, 9, 8], orden = "desc" -> [9, 8, 6, 4, 2]
 *
 */

const ordenaLista = (lista, orden) => {
  if (orden === "Asc") {
    for (let i = 0; i < lista.length; i++) {
      for (let j = i + 1; j < lista.length; j++) {
        if (lista[i] > lista[j]) {
          let aux = lista[i];
          lista[i] = lista[j];
          lista[j] = aux;
        }
      }
    }
  } else if (orden === "Desc") {
    for (let i = 0; i < lista.length; i++) {
      for (let j = i + 1; j < lista.length; j++) {
        if (lista[i] < lista[j]) {
          let aux = lista[i];
          lista[i] = lista[j];
          lista[j] = aux;
        }
      }
    }
  }
  return lista;
}

let lista = [2, 6, 4, 9, 8];
let orden = "Asc";

console.log(ordenaLista(lista, orden));

lista = [2, 6, 4, 9, 8];
orden = "Desc";

console.log(ordenaLista(lista, orden));

