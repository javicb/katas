/*
 *
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 *
 * Crear dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 *
 * Restricciones:
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Ejemplos:
 * - mcd(12, 18) -> 6
 * - mcm(12, 18) -> 36
 *
 */

const mcd = (a, b) => {
  if (a === b) {
    return a;
  } else if (a > b) {
    return mcd(a - b, b);
  } else {
    return mcd(a, b - a);
  }
}

const mcm = (a, b) => {
  return (a * b) / mcd(a, b);
}

console.log(mcd(56, 180));
console.log(mcm(56, 180));
console.log(mcd(12, 18));
console.log(mcm(12, 18));