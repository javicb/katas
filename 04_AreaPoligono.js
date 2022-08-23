/*
 *
 * ÁREA DE UN POLÍGONO
 *
 * Crear UNA ÚNICA FUNCIÓN que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 *
 * Ejemplos:
 * areaPoligono({ tipo: 'triangulo', base: 10, altura: 5 }) -> 25
 * areaPoligono({ tipo: 'cuadrado', lado: 10 }) -> 100
 * areaPoligono({ tipo: 'rectangulo', base: 10, altura: 5 }) -> 50
 *
 */

// función que sea capaz de calcular y retornar el área de un polígono
const areaPoligono = (poligono) => {
  if (poligono.tipo === 'triangulo') {
    return (poligono.base * poligono.altura) / 2;
  }

  if (poligono.tipo === 'cuadrado') {
    return poligono.lado * poligono.lado;
  }

  if (poligono.tipo === 'rectangulo') {
    return poligono.base * poligono.altura;
  }
};

console.log(areaPoligono({ tipo: 'triangulo', base: 10, altura: 5 }));
console.log(areaPoligono({ tipo: 'cuadrado', lado: 10 }));
console.log(areaPoligono({ tipo: 'rectangulo', base: 10, altura: 5 }));