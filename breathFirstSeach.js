//Busca em Largura

//Representando o grafo através de Listas de adjacência
//o Grafo está no diretório grafo_img
const graph = [
  [7, 12], //0 
  [3, 6, 10], //1 
  [1, 4 ,8], //2 
  [1, 2 ,7], //3 
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

//console.log(graph[1].length);


let BFS = (graph, source) => {
//    let nodeNumbers = graph.length;
  let queue = [];
  let marked = [];  
  let result = [];  
  let distance = 1;
  queue.push(source);
  while(queue.length){
    let node = queue.shift();
    for(let i = 0; i < graph[node].length; i++){
      if(!marked.includes(graph[node][i]) && (graph[node][i] != 1)){
        marked.push(graph[node][i]);
        result.push([source, graph[node][i], distance])
        if(!queue.includes(graph[node][i])){
          queue.push(graph[node][i]);
        }
      }              
    }
    distance++;  
  }
  return result;    
};

console.log(BFS(graph, 1)); 


/*

let BFS = (graph, source) => {
  //    let nodeNumbers = graph.length;
      let queue = [];
      let marked = [];
      let cont = 1;  
      queue.push(source);
      while(queue.length){
        let node = queue.shift();
        for(let i = 0; graph[node].length; i++){
          marked.push(graph[node][i]);
        }
      }
      return marked;
    };
  
    console.log(BFS(graph, 1)); */