function areThereDuplicates(...props) {
  const args = Array.from(props);

  if (!args.length) {
    return false;
  }

  const hashArgs = {};

  for (let key of args) {
    hashArgs[key] = hashArgs[key] + 1 || 1;
  }

  for (let key in hashArgs) {
    if (hashArgs[key] > 1) {
      return true;
    }
  }

  return false;
}

function oneLineSolution() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
console.log(oneLineSolution("a", "b", "c", "a"));
