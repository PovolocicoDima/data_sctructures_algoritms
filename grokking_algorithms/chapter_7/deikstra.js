const graph = {};
graph["start"] = {};
graph["start"]["a"] = 5;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["c"] = 4;
graph["a"]["d"] = 2;

graph["b"] = {};
graph["b"]["a"] = 8;
graph["b"]["d"] = 7;

graph["c"] = {};
graph["c"]["d"] = 6;
graph["a"]["fin"] = 3;

graph["d"] = {};
graph["d"]["fin"] = 1;

graph["fin"] = {};

const costs = {};
costs["a"] = 5;
costs["b"] = 2;
costs["c"] = Infinity;
costs["d"] = Infinity;
costs["fin"] = Infinity;

const parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["c"] = "a";
parents["d"] = null;
parents["fin"] = null;

let processed = [];

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;

  for (let node in costs) {
    const cost = costs[node];
    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
  const cost = costs[node];
  const neighbors = graph[node];
  Object.keys(neighbors).forEach(function (n) {
    const new_cost = cost + neighbors[n];
    if (costs[n] > new_cost) {
      costs[n] = new_cost;
      parents[n] = node;
    }
  });

  processed = processed.concat(node);
  console.log(processed);

  node = findLowestCostNode(costs);
}

console.log("Cost from the start to each node:");
console.log(costs); // { a: 5, b: 2, fin: 6 }
