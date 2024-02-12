const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
};

// const start = new Date();
const data = Array.apply(null, { length: 100_000 }).map(
  Function.call,
  Math.random
);

console.log(bubbleSort(data));
// const finish = new Date() - start;
// console.log(finish);
