/*
 *
 * CALCULADORA de txt
 *
 * Lee un fichero txt, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 */

const fs = require('fs');

// Función que lee el fichero txt y calcula su resultado
const calculadora = (fichero) => {
  let resultado = 0;
  let operacion = '';
  let numero = 0;
  let lineas = fs.readFileSync(fichero, 'utf8').split('\r\n');

  for (let i = 0; i < lineas.length; i++) {
    if (lineas[i] === '') {
      continue;
    }

    if (isNaN(lineas[i])) {
      if (lineas[i] === '+' || lineas[i] === '-' || lineas[i] === '*' || lineas[i] === '/') {
        operacion = lineas[i];
      } else {
        console.log('El formato del fichero no es correcto.');
        return;
      }
    } else {
      numero = parseFloat(lineas[i]);
      switch (operacion) {
        case '+':
          resultado += numero;
          break;
        case '-':
          resultado -= numero;
          break;
        case '*':
          resultado *= numero;
          break;
        case '/':
          resultado /= numero;
          break;
        default:
          resultado = numero;
      }
    }
  }
  console.log(resultado);
}

calculadora('calculadora.txt');