/*
 *
 * CUADRADO Y TRIÁNGULO 2D
 *
 * Crea un función que dibuje un cuadrado o un triángulo con asteriscos "*".
 * - Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.
 * - El programa debe validar que el tamaño del lado sea un número entero mayor que 0.
 *
 */

const dibujarCuadrado = (lado) => {
  for (let i = 0; i < lado; i++) {
    let linea = "";
    for (let j = 0; j < lado; j++) {
      linea += "* ";
    }
    console.log(linea);
  }
}


const dibujarTriangulo = (lado) => {
  for (let i = 0; i < lado; i++) {
    let linea = "";
    for (let j = 0; j < lado - i; j++) {
      linea += " ";
    }
    for (let j = 0; j <= i; j++) {
      linea += "* ";
    }
    console.log(linea);
  }
}

const dibujarDiamante = (lado) => {
  for (let i = 0; i < lado; i++) {
    let linea = "";
    for (let j = 0; j < lado - i; j++) {
      linea += " ";
    }
    for (let j = 0; j <= i; j++) {
      linea += "* ";
    }
    console.log(linea);
  }
  for (let i = lado - 2; i >= 0; i--) {
    let linea = "";
    for (let j = 0; j < lado - i; j++) {
      linea += " ";
    }
    for (let j = 0; j <= i; j++) {
      linea += "* ";
    }
    console.log(linea);
  }
}


const dibujar = (lado, figura) => {
  if (lado > 1 && Number.isInteger(lado)) {
    if (figura === "cuadrado") {
      dibujarCuadrado(lado);
    } else if (figura === "triangulo") {
      dibujarTriangulo(lado);
    } else if (figura === "diamante") {
      dibujarDiamante(lado);
    } else {
      console.log("La figura no es válida.");
    }
  } else {
    console.log("El lado debe ser un número entero mayor que 1.");
  }
}

dibujar(5, "cuadrado");
dibujar(5, "triangulo");
dibujar(5, "diamante");