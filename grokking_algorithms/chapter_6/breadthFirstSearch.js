const graph = {};
graph["you"] = ["bob", "alice", "clair"];
graph["alice"] = ["peggy"];
graph["bob"] = ["anuj"];
graph["clair"] = ["jonny", "tom"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["tom"] = [];
graph["jonny"] = [];

function personIsSeller(person) {
  if (person) {
    return person[0] === "t";
  }
}

function breadthFirstSearch(name) {
  const queue = [...graph[name]];
  const searched_persons = [];

  while (queue.length) {
    const person = queue.shift();
    if (!searched_persons.includes(person)) {
      if (personIsSeller(person)) {
        return `this person: ${person} - is seller`;
      } else {
        searched_persons.push(person);
        console.log(searched_persons);
        queue.push(...graph[person]);
      }
    }
  }

  return false;
}

const result = search("you");

console.log(result);
// console.log(graph);
