/*
 *
 * BATALLA POKÉMON
 *
 * Crear una función que calcule el daño de un ataque durante una batalla Pokémon.
 * - La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad
 * - Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)
 * - Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)
 * - El programa recibe los siguientes parámetros:
 *  - Tipo del Pokémon atacante.
 *  - Tipo del Pokémon defensor.
 *  - Ataque: Entre 1 y 100.
 *  - Defensa: Entre 1 y 100.
 *
 */

const TipoPokemon = ["Agua", "Fuego", "Planta", "Eléctrico"];

const BatallaPokemon = (tipoAtacante, tipoDefensor, ataque, defensa) => {
  let efectividad = 0;
  let daño = 0;

  if (ataque < 1 || ataque > 100 || defensa < 1 || defensa > 100) {
    return `El ataque o la defensa contiene un valor no válido.`;
  }

  if (!TipoPokemon.includes(tipoAtacante) || !TipoPokemon.includes(tipoDefensor)) {
    return `El tipo de Pokémon no es válido.`;
  }

  efectividad = EfectividadPodemon(tipoAtacante, tipoDefensor);

  daño = 50 * (ataque / defensa) * efectividad;
  return `El daño de ${tipoAtacante} contra ${tipoDefensor} es de ${daño}.`;
}

const EfectividadPodemon = (atacante, defensor) => {
  if (atacante === "Agua") {
    if (defensor === "Fuego") {
      return 2;
    }
    else if (defensor === "Planta") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (atacante === "Fuego") {
    if (defensor === "Agua") {
      return 0.5;
    }
    else if (defensor === "Planta") {
      return 2;
    }
    else {
      return 1;
    }
  }
  else if (atacante === "Planta") {
    if (defensor === "Agua") {
      return 2;
    }
    else if (defensor === "Fuego") {
      return 0.5;
    }
    else {
      return 1;
    }
  }
  else if (atacante === "Eléctrico") {
    if (defensor === "Agua") {
      return 2;
    }
    else if (defensor === "Fuego") {
      return 1;
    }
    else {
      return 0.5;
    }
  }
}


console.log(BatallaPokemon("Agua", "Fuego", 50, 50));
console.log(BatallaPokemon("Agua", "Planta", 50, 50));
console.log(BatallaPokemon("Agua", "Agua", 50, 50));
console.log(BatallaPokemon("Agua", "Eléctrico", 50, 50));
console.log(BatallaPokemon("Fuego", "Fuego", 50, 50));
console.log(BatallaPokemon("Fuego", "Agua", 50, 50));
console.log(BatallaPokemon("Fuego", "Planta", 50, 50));
console.log(BatallaPokemon("Fuego", "Eléctrico", 50, 50));
console.log(BatallaPokemon("Planta", "Fuego", 50, 50));
console.log(BatallaPokemon("Planta", "Agua", 50, 50));
console.log(BatallaPokemon("Planta", "Planta", 50, 50));
console.log(BatallaPokemon("Planta", "Eléctrico", 50, 50));
console.log(BatallaPokemon("Eléctrico", "Fuego", 50, 50));
console.log(BatallaPokemon("Eléctrico", "Agua", 50, 50));
console.log(BatallaPokemon("Eléctrico", "Planta", 50, 50));
console.log(BatallaPokemon("Eléctrico", "Eléctrico", 50, 50));
console.log(BatallaPokemon("Agua", "Tierra", 50, 50));