/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 *
 * Ejemplos:
 * - cicloSexagenarioChino(2021) -> "Año del buey de agua"
 * - cicloSexagenarioChino(2022) -> "Año del tigre de fuego"
 */

const cicloSexagenarioChino = (anio) => {
  const elementos = ['madera', 'fuego', 'tierra', 'metal', 'agua'];
  const animales = ['rata', 'buey', 'tigre', 'conejo', 'dragón', 'serpiente', 'caballo', 'oveja', 'mono', 'gallo', 'perro', 'cerdo'];
  const elemento = elementos[(anio - 4) % 5];
  const animal = animales[(anio - 4) % 12];
  return `Año del ${animal} de ${elemento}`;
}

console.log(cicloSexagenarioChino(1984));
console.log(cicloSexagenarioChino(2021));
console.log(cicloSexagenarioChino(2022));
console.log(cicloSexagenarioChino(2023));