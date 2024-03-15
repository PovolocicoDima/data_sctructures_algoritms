/**
 * Составляющие части графов:
 * - vertex(вершина) - a node
 * - edge(край, ребро) - a connection between nodes
 * Типы графов:
 * - weighted ( взвешанные )
 * - unweighted ( не взвешанные )
 * - directed ( направленные )
 * - undirected ( ненаправленные )
 * Ну и их комбинации типа weighted directed, unweighted undirected и так далее
 */

/**
 * Виды хранения графов:
 * - adjacency matrix ( марица смежности )
 * - adjecency list ( листы смежности )
 *     [
 *      [1, 5], -> 0     - индексы массива указывают на числа node(vertes) а числа
 *      [0, 2], -> 1       которые указаны в массиве по данном индексу указывают
 *      [1, 3], -> 2       на ноды между которыми находится данная нода, т.е. :
 *      [2, 4], -> 3       число 0 находится в графе между числами 1 и 5
 *      [3, 5], -> 4       число 1 находится между числами 0 и 2
 *      [4, 0], -> 5       число 2 находится между числами 1 и 3 и так далее(в примере учитывается
 *     ]                    что граф ненаправленный)
 *
 */

// UNDIRECTED GRAPH

class Graph {
  constructor() {
    this.adjecencyList = {}
  }

  addVertex(vertex) {
    this.adjecencyList[vertex] = []
  }

  addEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1].push(vertex2)
    this.adjecencyList[vertex2].push(vertex1)
    return this.adjecencyList
  }

  removeEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(
      (i) => i !== vertex2
    )
    this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(
      (i) => i !== vertex1
    )
  }

  deleteVertex(vertex) {
    while (this.adjecencyList[vertex].length) {
      const adjencencyVertex = this.adjecencyList[vertex].pop()
      this.removeEdge(vertex, adjencencyVertex)
    }

    delete this.adjecencyList[vertex]
  }
}

const graph = new Graph()
graph.addVertex('Moskow')
graph.addVertex('Tokyo')
graph.addVertex('Dallas')
graph.addVertex('Chisinau')
graph.addEdge('Chisinau', 'Tokyo')
graph.addEdge('Chisinau', 'Dallas')
graph.addEdge('Dallas', 'Moskow')
graph.addEdge('Tokyo', 'Dallas')
console.log(graph.adjecencyList)
graph.deleteVertex('Chisinau')
console.log(graph.adjecencyList)
