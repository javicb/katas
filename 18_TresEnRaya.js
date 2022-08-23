/*
 * TRES EN RAYA
 *
 * Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 */

// tic tac toe
const tresEnRaya = (arr) => {
  if (arr.length != 3) {
    return "Nulo";
  }

  let x = 0;
  let o = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length != 3) {
      return "Nulo";
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "X") {
        x++;
      } else if (arr[i][j] === "O") {
        o++;
      }
    }
  }

  if (Math.abs(x - o) > 1) {
    return "Nulo";
  }

  // ganar o empate
  let ganador = "";
  let empate = true;

  // filas
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2]) {
      ganador = arr[i][0];
      empate = false;
    }
  }

  // columnas
  for (let i = 0; i < arr.length; i++) {
    if (arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i]) {
      ganador = arr[0][i];
      empate = false;
    }
  }

  // diagonales
  if (arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]) {
    ganador = arr[0][0];
    empate = false;
  }
  if (arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0]) {
    ganador = arr[0][2];
    empate = false;
  }

  if (ganador === "X" || ganador === "O") {
    return `Ganador: ${ganador}`;
  }
  if (empate) {
    return "Empate";
  }
  return "Nulo";
};

console.log(tresEnRaya([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
]));
console.log(tresEnRaya([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "O"]
]));
console.log(tresEnRaya([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", ""]
]));
console.log(tresEnRaya([
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["O", "X", "X"]
]));
console.log(tresEnRaya([
  ["X", "O", "X"],
  ["O", "O", "O"],
  ["O", "X", "X"]
]));

