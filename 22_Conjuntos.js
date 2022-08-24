/*
 *
 * CONJUNTOS
 *
 * Crear una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y devolverá los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y devolverá los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Restricciones:
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Ejemplos:
 * - conjuntos([1, 2, 3], [2, 3, 4], true) -> [2, 3]
 * - conjuntos([1, 2, 3], [2, 3, 4], false) -> [1, 4]
 *
 */

const conjuntos = (array1, array2, booleano) => {

  if (booleano) {
    return comunes(array1, array2);
  } else {
    return noComunes(array1, array2);
  }
}

// obtener los elementos comunes entre dos arrays
const comunes = (array1, array2) => {
  let resultado = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        resultado.push(array1[i]);
      }
    }
  }
  return resultado;
}

// obtener los elementos no comunes entre dos arrays
const noComunes = (array1, array2) => {
  let resultado = [];

  for (let i = 0; i < array1.length; i++) {
    let encontrado = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      resultado.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    let encontrado = false;
    for (let j = 0; j < array1.length; j++) {
      if (array2[i] === array1[j]) {
        encontrado = true;
        break;
      }
    }
    if (!encontrado) {
      resultado.push(array2[i]);
    }
  }
  return resultado;
}

console.log(conjuntos([1, 2, 3], [2, 3, 4], true))
console.log(conjuntos([1, 2, 3], [2, 3, 4], false))