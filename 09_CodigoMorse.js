/*
 *
 * CÓDIGO MORSE
 *
 * Crear una función que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Ejemplos:
 * - codigoMorse("Hola mundo") -> ".... --- .-.. .-   -- ..- -. -.. ---"
 * - codigoMorse(".... --- .-.. .-   -- ..- -. -.. ---") -> "Hola mundo"
 */
const morse = {
  a: '.-',
  b: '-...',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  g: '--.',
  h: '....',
  i: '..',
  j: '.---',
  k: '-.-',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  q: '--.-',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
  v: '...-',
  w: '.--',
  x: '-..-',
  y: '-.--',
  z: '--..',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  0: '-----',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
  ' ': '/'
};



const codigoMorse = (cadena) => {
  if (cadena.includes('.') || cadena.includes('-')) {
    return morseToTexto(cadena);
  } else {
    return textoToMorse(cadena);
  }
}

// función que convierta texto a morse
const textoToMorse = (cadena) => {
  return cadena.toLowerCase().split('').map((letra) => morse[letra]).join(' ');
}

// función que convierta morse a texto
const morseToTexto = (cadena) => {
  return cadena.split(' ').map((letra) => {
    for (const key in morse) {
      if (morse[key] === letra) {
        return key;
      }
    }
  }).join('');
}



console.log(codigoMorse('Hola mundo'));
console.log(codigoMorse('.... --- .-.. .- / -- ..- -. -.. ---'));


