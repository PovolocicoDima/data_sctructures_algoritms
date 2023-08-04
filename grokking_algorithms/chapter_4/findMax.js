const array_of_items = [];

function findMax(arr) {
  if (arr.length <= 1) {
    return arr[0] ? arr[0] : 0;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }
  let sub_max = findMax(arr.slice(1));
  return arr[0] > sub_max ? arr[0] : sub_max;
}

console.log(findMax(array_of_items));
