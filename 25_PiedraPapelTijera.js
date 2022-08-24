/*
 *
 * PIEDRA, PAPEL, TIJERA
 *
 * Crear una función que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Ejemplos:
 * - piedraPapelTijera([["R", "S"], ["S", "R"], ["P", "S"]]) -> "Player 2"
 * - piedraPapelTijera([["R", "S"], ["S", "R"], ["P", "S"], ["S", "P"]]) -> "Tie"
 * - piedraPapelTijera([["R", "S"], ["S", "R"], ["P", "S"], ["S", "P"], ["P", "R"]]) -> "Player 1"
 *
 */

const piedraPapelTijera = (jugadas) => {
  let player1 = 0;
  let player2 = 0;

  jugadas.forEach((jugada) => {
    if (jugada[0] === "R") {
      if (jugada[1] === "S") {
        player1++;
      } else if (jugada[1] === "P") {
        player2++;
      }
    } else if (jugada[0] === "S") {
      if (jugada[1] === "P") {
        player1++;
      } else if (jugada[1] === "R") {
        player2++;
      }
    } else if (jugada[0] === "P") {
      if (jugada[1] === "R") {
        player1++;
      } else if (jugada[1] === "S") {
        player2++;
      }
    }
  });

  if (player1 > player2) {
    return "Player 1";
  } else if (player1 < player2) {
    return "Player 2";
  } else {
    return "Tie";
  }
}

console.log(piedraPapelTijera([["R", "S"], ["S", "R"], ["P", "S"]]));
console.log(piedraPapelTijera([["R", "S"], ["S", "R"], ["P", "S"], ["S", "P"]]));
console.log(piedraPapelTijera([["R", "S"], ["S", "R"], ["P", "S"], ["S", "P"], ["P", "R"]]));