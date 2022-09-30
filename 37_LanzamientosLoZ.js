/*
 * Reto #37
 * LOS LANZAMIENTOS DE "THE LEGEND OF ZELDA"
 *
 * ¡Han anunciado un nuevo "The Legend of Zelda"! Se llamará "Tears of the Kingdom"
 * y se lanzará el 12 de mayo de 2023.
 * Pero, ¿recuerdas cuánto tiempo ha pasado entre los distintos "The Legend of Zelda" de la historia?
 * Crear una función que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones.
 * - Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto
 *   puedes usar el mes, o incluso inventártelo)
 */

const Zelda = {
  "The Legend of Zelda": new Date("1986-02-21"),
  "Zelda II: The Adventure of Link": new Date("1987-01-14"),
  "The Legend of Zelda: A Link to the Past": new Date("1991-11-21"),
  "The Legend of Zelda: Link's Awakening": new Date("1993-06-06"),
  "The Legend of Zelda: Ocarina of Time": new Date("1998-11-21"),
  "The Legend of Zelda: Zelda: Majora's Mask": new Date("2000-04-27"),
  "The Legend of Zelda: Oracle of Seasons": new Date("2001-02-27"),
  "The Legend of Zelda: Oracle of Ages": new Date("2001-02-27"),
  "The Legend of Zelda: The Wind Waker": new Date("2002-12-13"),
  "The Legend of Zelda: Link to the Past/Four Swords": new Date("2003-03-14"),
  "The Legend of Zelda: Four Swords Adventures": new Date("2004-03-18"),
  "The Legend of Zelda: The Minish Cap": new Date("2004-11-04"),
  "The Legend of Zelda: Twilight Princess": new Date("2006-12-02"),
  "The Legend of Zelda: Phantom Hourglass": new Date("2007-06-23"),
  "The Legend of Zelda: Spirit Tracks": new Date("2009-12-23"),
  "The Legend of Zelda: Skyward Sword": new Date("2011-11-23"),
  "The Legend of Zelda: A Link Between Worlds": new Date("2013-12-26"),
  "The Legend of Zelda: Tri Force Heroes": new Date("2015-10-22"),
  "The Legend of Zelda: Breath of the Wild": new Date("2017-03-03"),
  "The Legend of Zelda: Tears of the Kingdom": new Date("2023-05-12"),
};


function getDaysBetweenGames(game1, game2) {
  const days = Math.abs(Zelda[game1] - Zelda[game2]) / (1000 * 60 * 60 * 24);
  return Math.round(days);
}

function getYearsBetweenGames(game1, game2) {
  const days = getDaysBetweenGames(game1, game2);
  const years = Math.floor(days / 365);
  return years;
}

function getYearsAndDaysBetweenGames(game1, game2) {
  const days = getDaysBetweenGames(game1, game2);
  const years = Math.floor(days / 365);
  const daysLeft = days % 365;
  return `Entre la fecha de lanzamiento de "${game1}" y "${game2}" hay ${years} años y ${daysLeft} días`;
}

console.log(getYearsAndDaysBetweenGames("The Legend of Zelda", "Zelda II: The Adventure of Link"));
console.log(getYearsAndDaysBetweenGames("The Legend of Zelda", "The Legend of Zelda: Tears of the Kingdom"));
