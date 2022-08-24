/*
 *
 * CONTAR HASTA 100
 *
 * Crear una función que cuente del 1 al 100 de uno en uno (imprimiendo cada uno)
 *
 */


// contar del 1 al 100 con un for
const contarHastaCienFor = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}


//contar del 1 al 100 con un foreach
const contarHastaCienForEach = () => {
  let array = [];
  for (let i = 1; i <= 100; i++) {
    array.push(i);
  }
  array.forEach((elemento) => {
    console.log(elemento);
  });
}

// contar del 1 al 100 con un while
const contarHastaCienWhile = () => {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    i++;
  }
}


// contar del 1 al 100 de forma recursiva
const contarHastaCienRecursivo = (numero) => {
  if (numero <= 100) {
    console.log(numero);
    contarHastaCienRecursivo(numero + 1);
  }
}

contarHastaCienFor();
contarHastaCienForEach();
contarHastaCienWhile();
contarHastaCienRecursivo(1);