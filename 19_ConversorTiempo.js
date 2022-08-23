/*
 * CONVERSOR DE TIEMPO
 *
 * Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos
 * Ejemplos:
 * - conversorTiempo(0, 0, 0, 1) -> 1000
 * - conversorTiempo(0, 0, 1, 0) -> 60000
 * - conversorTiempo(0, 1, 0, 0) -> 3600000
 * - conversorTiempo(1, 0, 0, 0) -> 86400000
 * - conversorTiempo(1, 1, 1, 1) -> 90061000
 */

// conversor de tiempo
const conversorTiempo = (dias, horas, minutos, segundos) => {
  let tiempo = 0;
  tiempo += dias * 86400000;
  tiempo += horas * 3600000;
  tiempo += minutos * 60000;
  tiempo += segundos * 1000;
  return tiempo;
}

console.log(conversorTiempo(0, 0, 0, 1));
console.log(conversorTiempo(0, 0, 1, 0));
console.log(conversorTiempo(0, 1, 0, 0));
console.log(conversorTiempo(1, 0, 0, 0));
console.log(conversorTiempo(1, 1, 1, 1));