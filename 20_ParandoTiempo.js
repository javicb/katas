/*
 *
 * PARANDO EL TIEMPO
 *
 * Crea una función que sume 2 números y retorne su resultado pasados unos segundos.
 * - Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.
 * - Si el lenguaje lo soporta, deberá retornar el resultado de forma asíncrona, es decir, sin detener la ejecución del programa principal. Se podría ejecutar varias veces al mismo tiempo.
 *
 * Ejemplos:
 * - parandoTiempo(1, 2, 3) -> 3 segundos después, se mostrará por consola el resultado de la suma de 1 + 2
 */

// parando el tiempo
const parandoTiempo = async (num1, num2, segundos) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, segundos * 1000);
  });
}

parandoTiempo(1, 2, 3).then((result) => {
  console.log(result);
});

parandoTiempo(2, 2, 2).then((result) => {
  console.log(result);
});