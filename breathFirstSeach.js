//Busca em Largura

const VALUE = 0;
const DISTANCE = 1;
const SOURCE = 1;
//Representando o grafo através de Listas de adjacência
//o Grafo está no diretório grafo_img
const graph = [
  [7, 12], //0 
  [3, 6, 10], //1 
  [1, 4, 8], //2 
  [1, 2, 7], //3 
  [3, 11], //4 
  [0, 2, 3], //5 
  [2, 12, 13], //6 
  [1, 3, 12], //7 
  [2, 3, 12], //8 
  [2, 4], //9 
  [0, 6, 13], //10 
  [0, 5, 8], //11 
  [5, 8, 10], //12 
  [8, 11, 12], //13
  [6, 7, 13], //14 
];

let BFS = (graph, source) => {
  let queue = [];
  let marked = [];
  let result = [];
  let startingDistance = 0;
  queue.push([source, startingDistance]);
  marked.push(source);
  while (queue.length) {
    let node = queue.shift();
    node[DISTANCE] = node[DISTANCE] + 1;
    for (let i = 0; i < graph[node[VALUE]].length; i++) {
      if (!marked.includes(graph[node[VALUE]][i])) {
        marked.push(graph[node[VALUE]][i]);
        result.push([graph[node[VALUE]][i], node[DISTANCE]])
        //A fila é formada por cada nó e sua distância em relação ao ponto de partida (source)  
        queue.push([graph[node[VALUE]][i], node[DISTANCE]]);
      }
    }
  }
  return result;
};

let result = BFS(graph, SOURCE);

print(result);

function print(result) {
  console.log("Distâncias:");
  for (let i = 0; i < result.length; i++) {
    console.log("(" + SOURCE + "," + result[i][VALUE] + "): " + result[i][DISTANCE]);
  }
}