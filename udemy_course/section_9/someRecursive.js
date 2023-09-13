/*
    Write a recursive function called 
    someRecursive which accepts an array and 
    a callback. The function returns true if a 
    single value in the array returns true when 
    passed to the callback. Otherwise it returns false.

*/

const someRecursive = (arr, callback) => {
  if (!arr.length) {
    return false;
  } else if (callback(arr[0]) === true) {
    return true;
  }
  return someRecursive(arr.slice(1), callback);
};

// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
