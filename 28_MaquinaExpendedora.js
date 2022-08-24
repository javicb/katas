/*
 *
 * MÁQUINA EXPENDEDORA
 *
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa devolverá el nombre del producto y un array con el dinero de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje y devolver todas las monedas.
 * - Si no hay dinero de vuelta, el array se devolveerá vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 *
 * Ejemplo:
 * - dinero = [200, 100, 50, 50, 10, 10, 5, 5, 5, 5]
 * - producto = 2
 * - resultado = ["Coca-Cola", [10, 5]]
 *
 * - dinero = [200, 100, 50, 50, 10, 10, 5, 5, 5, 5]
 * - producto = 3
 * - resultado = ["Agua", []]
 *
 */

const productos = [
  { nombre: "Coca-Cola", precio: 200 },
  { nombre: "Fanta", precio: 150 },
  { nombre: "Agua", precio: 100 },
  { nombre: "Cerveza", precio: 250 },
];

const monedasSoportadas = [5, 10, 50, 100, 200];

const maquinaExpendedora = (dinero, producto) => {
  if (producto < 1 || producto > productos.length) {
    return "Producto no existente";
  }

  let precio = productos[producto - 1].precio;
  let vuelta = [];

  let i;
  for (i = 0; i < dinero.length; i++) {
    if (!monedasSoportadas.includes(dinero[i])) {
      return "Moneda no soportada";
    }
    precio -= dinero[i];
    if (precio < 0) {
      vuelta.push(dinero[i] + precio);
      break;
    }
  }

  if (precio > 0) {
    return "Dinero insuficiente";
  }

  vuelta = vuelta.concat(dinero.slice(i + 1));
  //vuelta = dinero.slice(i);

  return [productos[producto - 1].nombre, vuelta];
}

let dinero = [100, 50];
let producto = 2;

console.log(maquinaExpendedora(dinero, producto));

dinero = [200, 100, 50];
producto = 3;

console.log(maquinaExpendedora(dinero, producto));
