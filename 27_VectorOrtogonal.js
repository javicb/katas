/*
 *
 * VECTORES ORTOGONALES
 *
 * Crea un función que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 * - Los vectores ortogonales son aquellos que son perpendiculares entre sí.
 *
 * Ejemplos:
 * - ortogonal([1, 2], [2, -1]) -> true
 * - ortogonal([1, 2], [2, 1]) -> false
 *
 */

const ortogonal = (vector1, vector2) => {
  if (vector1.length !== vector2.length) {
    return false;
  }

  let producto = 0;
  for (let i = 0; i < vector1.length; i++) {
    producto += vector1[i] * vector2[i];
  }

  return producto === 0;
}

console.log(ortogonal([1, 2], [2, -1]));
console.log(ortogonal([1, 2], [2, 1]));