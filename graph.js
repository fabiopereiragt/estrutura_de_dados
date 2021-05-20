/*
Aluno: Fábio Rodrigues Pereira
Por ser javascript, pode rodar até mesmo no console do browser. :)
Basta copiar e colar o código no console do Chrome + Enter.
*/

const POSICAO_ARESTA = 1;
const POSICAO_VERTICE = 0;
let graphEdges = [];

//Representando o grafo através de Listas de adjacência
//o Grafo está no diretório grafo_img
const graph = [
  [6],
  [3, 9],
  [5],
  [1, 7, 8],
  [8],
  [2, 7],
  [0, 8],
  [3, 5, 9],
  [3, 4, 6],
  [1, 7],
];

/*
Organiza o grafo em tuplas: [Vertices, Total_de_Arestas]
Para auxiliar na ordenação.
*/
for (i = 0; i < graph.length; i++) {
  graphEdges[i] = [i, graph[i].length];
}

let arraySorted = insertionSort(graphEdges);

//Ordena o grafo por aresta
function insertionSort(array) {
  let current;
  for (i = 1; i < array.length; i++) {
    let j = i - 1;
    current = array[i];
    while (j >= 0 && current[POSICAO_ARESTA] < array[j][POSICAO_ARESTA]) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}

//Imprime o resultado
for (let i = arraySorted.length - 1; i >= 0; i--) {
  console.log(
    "Vértice " +
      arraySorted[i][POSICAO_VERTICE] +
      ", Grau " +
      arraySorted[i][POSICAO_ARESTA]
  );
}

//Vértice 3, grau 3; vértice 4, grau 2"