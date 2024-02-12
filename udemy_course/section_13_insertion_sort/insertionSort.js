// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentItem = arr[i];
//     if (currentItem < arr[i - 1]) {
//       let searchedIdx = i - 1;
//       for (let j = i - 1; j >= 0; j--) {
//         if (arr[j] > currentItem) {
//           searchedIdx--;
//         }
//       }

//       arr.splice(searchedIdx, 0, currentItem);
//     }
//   }

//   return arr;
// }

// console.log(insertionSort([3, 44, 38, 5, 47, 15]));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      console.log(arr);
      console.log(arr[i], arr[j]);
      console.log(arr[j + 1]);
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
    console.log("`````");
  }

  return arr;
}

// console.log(insertionSort([4, 1, 0, 2, -1]));

function myInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentItem = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > currentItem; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentItem;
  }

  return arr;
}

console.log(myInsertionSort([-3, 3, 4, 1, 2]));
