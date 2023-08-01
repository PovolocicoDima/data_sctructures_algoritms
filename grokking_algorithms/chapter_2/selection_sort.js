const arr = [33, 22, 11, 3, 4, 0, 13, 27, 49];

function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i <= arr.length; i += 1) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }

  return smallest_index;
}

function selectionSort(arr) {
  const sortedArray = [];
  const copiedArray = [...arr];

  for (let i = 0; i <= arr.length; i += 1) {
    const smallestIndex = findSmallest(copiedArray);
    const smallest = copiedArray.splice(smallestIndex, 1);
    sortedArray.push(...smallest);
  }

  return sortedArray;
}

console.log(selectionSort(arr));
