const bubbleSort = (arr) => {
  let j = 0;

  function swap(arr, idx1, idx2) {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  function iteration(arr) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }

  iteration(arr);

  return arr;
};

console.log(bubbleSort([7, 3, 8, 1, 10, 22, 4, 33, 15]));
