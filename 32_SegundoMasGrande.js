/*
 *
 * EL SEGUNDO NÚMERO MÁS GRANDE
 *
 * Crear una función para que dado un listado de números, encuentra el SEGUNDO más grande.
 * - Si no hay un segundo más grande, devolver -1.
 * - Si la matriz está vacía, devolver -1.
 * - Si la matriz contiene elementos que no son números, devolver -1.
 * - Si la matriz contiene un solo elemento, devolver -1.
 *
 * Ejemplo:
 * segundoMasGrande([1, 2, 3, 4, 5]) // 4
 * segundoMasGrande([19, 9, 11, 0, 12]) // 12
 * segundoMasGrande([2, 2, 2, 2, 2]) // -1
 * segundoMasGrande([2]) // -1
 * segundoMasGrande([]) // -1
 * segundoMasGrande([true, false, "hola"]) // -1
 * segundoMasGrande([2, "hola"]) // -1
 * segundoMasGrande([2, null]) // -1
 * segundoMasGrande([2, undefined]) // -1
 * segundoMasGrande([2, NaN]) // -1
 * segundoMasGrande([2, Infinity]) // -1
 * segundoMasGrande([2, -Infinity]) // -1
 * segundoMasGrande([2, 0 / 0]) // -1
 * segundoMasGrande([2, 0 * 0]) // -1
 * segundoMasGrande([2, 0 / 1]) // -1
 * segundoMasGrande([2, 0 / -1]) // -1
 *
 */

const segundoMasGrande = (lista) => {
  if (lista.length < 2) {
    return -1;
  }
  let listaOrdenada = lista.sort((a, b) => b - a);
  let segundoMasGrande = listaOrdenada[1];
  if (segundoMasGrande === undefined) {
    return -1;
  }
  return segundoMasGrande;
}

let lista = [1, 2, 5, 4, 3];

console.log(segundoMasGrande(lista));
