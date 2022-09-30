/*
 *
 * TOP ALGORITMOS: QUICK SORT
 *
 * Implementar uno de los algoritmos de ordenación más famosos: el "Quick Sort", creado por C.A.R. Hoare.
 * - Entender el funcionamiento de los algoritmos más utilizados de la historia nos ayuda a
 *   mejorar nuestro conocimiento sobre ingeniería de software. Dedícale tiempo a entenderlo,
 *   no únicamente a copiar su implementación.
 *
 * - En esta ocasión, el algoritmo que vamos a implementar es el "Quick Sort".
 * - El "Quick Sort" es un algoritmo de ordenación que utiliza la técnica de "Divide y Vencerás".
 * - El algoritmo consiste en:
 * - Elegir un elemento del array como "pivote".
 * - Reordenar el array de tal forma que todos los elementos menores que el pivote queden a su
 *   izquierda y todos los elementos mayores a su derecha.
 * - Ordenar recursivamente los elementos a la izquierda y a la derecha del pivote.
 * - El algoritmo es más rápido que el "Merge Sort" y el "Heap Sort" en la mayoría de los casos.
 * - El "Quick Sort" es un algoritmo muy utilizado en la industria, por lo que es muy importante
 *   que lo conozcas y entiendas.
 * - El "Quick Sort" es un algoritmo recursivo.
 * - El algoritmo debe ordenar el array de menor a mayor.
 * - El algoritmo debe ser in-place, es decir, no debe crear un nuevo array.
 * - El algoritmo debe ser estable, es decir, no debe cambiar el orden relativo de los elementos
*    iguales.
 * - El algoritmo debe ser capaz de ordenar arrays con elementos repetidos.
 *
 * Ejemplos:
 * quickSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
 * quickSort([5, 4, 3, 2, 1]) // [1, 2, 3, 4, 5]
 * quickSort([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]) // [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
 *
 */

const quickSort = (array) => {
  const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  const partition = (array, start, end) => {
    const pivot = array[end];
    let partitionIndex = start;

    for (let i = start; i < end; i++) {
      if (array[i] <= pivot) {
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }

    swap(array, partitionIndex, end);
    return partitionIndex;
  };

  const sort = (array, start, end) => {
    if (start < end) {
      const partitionIndex = partition(array, start, end);
      sort(array, start, partitionIndex - 1);
      sort(array, partitionIndex + 1, end);
    }
  };

  sort(array, 0, array.length - 1);
  return array;
};

console.log(quickSort([1, 2, 3, 4, 5]));
console.log(quickSort([5, 4, 3, 2, 1]));
console.log(quickSort([5, 4, 3, 2, 1, 1, 2, 3, 4, 5]));