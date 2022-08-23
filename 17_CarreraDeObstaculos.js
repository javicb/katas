/*
 * CARRERA DE OBSTACULOS
 *
 * Crea una función que evalúe si un/a atleta ha superado correctamente una carrera de obstáculos.
 *
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no
 *        variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 *
 */

// carrera de obstaculos
const carreraDeObstaculos = (arr, str) => {
  let pista = str.split("");
  let correcto = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "run" && pista[i] === "|") {
      pista[i] = "/";
      correcto = false;
    } else if (arr[i] === "jump" && pista[i] === "_") {
      pista[i] = "x";
      correcto = false;
    }
  }

  console.log(pista.join(""));
  return correcto;
};



console.log(carreraDeObstaculos(["run", "jump", "run", "jump", "run"], "_|_|_"));
console.log(carreraDeObstaculos(["run", "jump", "run", "run", "jump"], "_|__|"));
console.log(carreraDeObstaculos(["run", "jump", "run", "run", "run", "run", "run", "run"], "_|_|__|_"));
