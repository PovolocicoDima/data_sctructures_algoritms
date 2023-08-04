const array_of_items = [2, 4, 6, 10];

function sum(arr) {
  if (arr.length <= 1) {
    return arr[0];
  } else {
    const firstNumber = arr.shift();
    return firstNumber + sum(arr);
  }
}

console.log(sum(array_of_items));
