/*
 *
 * MARCO DE PALABRAS
 *
 * Crear una función que reciba un texto y muestre cada palabra en una línea, formando un marco rectangular de asteriscos.
 * - lorem ipsum dolo Se vería así:
 *   **********
 *   * lorem  *
 *   * ipsum  *
 *   * dolo   *
 *   **********
 *
 * - El marco debe tener un espacio de separación entre el texto y los bordes.
 *
 */

const marcoDePalabras = (texto) => {
  let palabras = texto.split(" ");
  let maxLength = 0;

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length > maxLength) {
      maxLength = palabras[i].length;
    }
  }
  let linea = "";
  for (let i = 0; i < maxLength + 4; i++) {
    linea += "*";
  }
  console.log(linea);

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let espacio = "";
    for (let j = 0; j < maxLength - palabra.length; j++) {
      espacio += " ";
    }
    console.log("* " + palabra + espacio + " *");
  }
  console.log(linea);
}

let texto = "lorem ipsum dolo";

marcoDePalabras(texto);