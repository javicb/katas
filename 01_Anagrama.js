/*
 * ANAGRAMA
 *
 * Crear una función que reciba dos palabras y devuelva verdadero o falso según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Ejemplos:
 * anagrama("roma", "amor") -> true
 * anagrama("roma", "amora") -> false
 */

// funcion anagrama
const esAnagrama = (palabra1, palabra2) => {
  // si las palabras son iguales, no son anagramas
  if (palabra1.toLowerCase() === palabra2.toLowerCase()) {
    return false;
  }

  return palabra1.toLowerCase().split("").sort().join("") === palabra2.toLowerCase().split("").sort().join("");
};


console.log(esAnagrama("Hola", "Aloh"));
console.log(esAnagrama("roma", "amora"));
console.log(esAnagrama("roma", "mora"));
