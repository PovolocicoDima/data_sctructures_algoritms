/**
 * Graph traversal uses:
 * - peer to peer networking
 * - web crawlers
 * - finding "closest" matches/recommendations
 * - shortest path problems:
 *     - GPS navigation
 *     - solving mazes(лабиринты)
 *     - AI (shortest path to win the game)
 */

/**
 *                A
 *            /       \
 *          B           C
 *          |           |
 *          D-----------E
 *            \       /
 *                F
 */

/**
 * Object structure
 * {
 *      "A": [ "B", "C" ],
 *      "B": [ "A", "D" ],
 *      "C": [ "A", "E" ],
 *      "D": [ "B", "E", "F"],
 *      "E": [ "C", "D", "F"],
 *      "F": [ "D", "E"],
 * }
 */

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

  /**
   * DEPTH FIRST TRAVERSAL RECUIRSIVE
   */
  dTFRecursive(startingNode) {
    const result = []
    const visited = {}
    const adjecencyList = this.adjecencyList
    ;(function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)

      adjecencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor)
        }
      })
    })(startingNode)

    return result // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
  }

  /**
   * DEPTH FIRST TRAVERSAL ITERATIVE
   */
  dtfIterative(startingNode) {
    const stack = [startingNode]
    const result = []
    const visited = {}
    let currentVertex

    visited[startingNode] = true
    while (stack.length) {
      console.log(stack)
      currentVertex = stack.pop()
      result.push(currentVertex)

      this.adjecencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true
          stack.push(neighbor)
        }
      })
    }

    return result
  }
}

const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

console.log(graph.dtfIterative('A'))
