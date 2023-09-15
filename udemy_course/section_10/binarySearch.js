/*
    Write a function called binarySearch which accepts a sorted array 
    and a value and returns the index at which the value exists. Otherwise, return -1.

    This algorithm should be more efficient than linearSearch -
    you can read how to implement it here - 
    https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
    and here - 
    https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

function binarySearch(arr, searchingNumber) {
  // add whatever parameters you deem necessary - good luck!
  if (!arr.length) {
    return -1;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let num = arr[mid];
    if (num === searchingNumber) {
      return mid;
    } else if (num < searchingNumber) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
