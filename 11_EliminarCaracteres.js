/*
 * ELIMINANDO CARACTERES
 *
 * Crear una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Ejemplo:
 * str1 = "Hola Mundo"
 *  str2 = "Hola"
 *  out1 = "Mundo"
 *  out2 = ""
 */

const eliminar = (str1, str2) => {
  NoComunes(str1, str2);
  NoComunes(str2, str1);
}


function NoComunes(str1, str2) {
  let out = "";

  for (let i = 0; i < str1.length; i++) {
    if (str1.toLowerCase().indexOf(str2.toLowerCase()[i]) == -1) {
      out += str1[i];
    }
  }
  console.log(out);
}


console.log(eliminar("Hola mundo", "hola"));