/*
 *
 * EXPRESIONES EQUILIBRADAS
 *
 * Crear un función que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 *
 * Ejemplos:
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const delimitadores = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const expresionEquilibrada = (expresion) => {

  const apertura = Object.keys(delimitadores);
  const cierre = Object.values(delimitadores);
  const pila = [];

  for (let i = 0; i < expresion.length; i++) {
    const caracter = expresion[i];
    if (apertura.includes(caracter)) {
      pila.push(caracter);
    } else if (cierre.includes(caracter)) {
      const ultimo = pila.pop();
      if (delimitadores[ultimo] !== caracter) {
        return false;
      }
    }
  }
  return pila.length === 0;
}

console.log(expresionEquilibrada('{ [ a * ( c + d ) ] - 5 }'));
console.log(expresionEquilibrada('{ a * ( c + d ) ] - 5 }'));
console.log(expresionEquilibrada("{a + b [c] * (2x2)}}}}"))
console.log(expresionEquilibrada("{ [ a * ( c + d ) ] - 5 }"))
console.log(expresionEquilibrada("{ a * ( c + d ) ] - 5 }"))
console.log(expresionEquilibrada("{a^4 + (((ax4)}"))
console.log(expresionEquilibrada("{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }"))
console.log(expresionEquilibrada("{{{{{{(}}}}}}"))
console.log(expresionEquilibrada("(a"))