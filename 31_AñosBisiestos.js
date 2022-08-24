/*
 *
 * AÑOS BISIESTOS
 *
 * Crear una función que imprima los 30 próximos años bisiestos siguientes a uno dado.
 *
 */

const bisiestos = (año) => {
  let bisiesto = Math.abs(año);
  if (bisiesto % 4 !== 0) {
    bisiesto++;
  }
  for (let i = 0; i < 30; i++) {
    console.log(bisiesto);
    bisiesto += 4;
  }
}

bisiestos(-1500);