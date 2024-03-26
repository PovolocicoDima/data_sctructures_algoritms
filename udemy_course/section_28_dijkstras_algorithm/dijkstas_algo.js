class PriopityQueue {
  constructor() {
    this.values = []
  }

  enqueue(val, priority) {
    this.values.push({ val, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightGraph {
  constructor() {
    this.adjacencyList = []
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight,
    })

    this.adjacencyList[vertex2].push({
      node: vertex1,
      weight,
    })
  }

  dijkstra(start, end) {
    const nodes = new PriopityQueue()
    const distances = {}
    const previous = {}
    const path = [] // to return at the end

    // build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }

      previous[vertex] = null
    }

    // run code as long as there is something to visit
    let smallest

    while (nodes.values.length) {
      smallest = nodes.dequeue().val
      if (smallest === end) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }

        return path.concat(start).reverse()
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighbor node
          let nextNode = this.adjacencyList[smallest][neighbor]
          // calculate new distance to neighbor
          let candidate = distances[smallest] + nextNode.weight
          let nextNeighbor = nextNode.node
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate
            // updating previous - How we got to the next neigbor
            previous[nextNeighbor] = smallest
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }
  }
}

const weightGraph = new WeightGraph()
weightGraph.addVertex('A')
weightGraph.addVertex('B')
weightGraph.addVertex('C')
weightGraph.addVertex('D')
weightGraph.addVertex('E')
weightGraph.addVertex('F')

weightGraph.addEdge('A', 'B', 4)
weightGraph.addEdge('A', 'C', 2)
weightGraph.addEdge('B', 'E', 3)
weightGraph.addEdge('C', 'D', 2)
weightGraph.addEdge('C', 'F', 4)
weightGraph.addEdge('D', 'E', 3)
weightGraph.addEdge('D', 'F', 1)
weightGraph.addEdge('E', 'F', 1)

console.log(weightGraph.dijkstra('A', 'E'))
