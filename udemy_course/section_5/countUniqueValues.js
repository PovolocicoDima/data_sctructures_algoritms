const countUniqueValues = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      count += 1;
    }
  }

  return count;
};

const secondVariant = (arr) => {
  if (!arr.length) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

const one = [1, 1, 1, 1, 1, 1, 1, 2];
const two = [-1, -2, -3, 1, 2, 2, 2, 2, 3, 4];
const three = [-10, -9, -7, 7];
const four = [-1, 1, 2, 3, 4, 4, 4, 4];
const five = [0, 0, 0, 0, 0, 0, 0];

console.log(secondVariant(one)); //2
console.log(secondVariant(two)); //  7
console.log(secondVariant(three)); //4
console.log(secondVariant(four)); // 5
console.log(secondVariant(five)); // 0

// console.log(countUniqueValues(one));
// console.log(countUniqueValues(two));
// console.log(countUniqueValues(three));
// console.log(countUniqueValues(four));
// console.log(countUniqueValues(five));
