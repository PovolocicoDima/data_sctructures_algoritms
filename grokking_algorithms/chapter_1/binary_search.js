const list_of_items = [3, 5, 7, 8, 10, 13, 15, 19, 22, 35, 56, 67];

function binarySearch(list, item) {
  let low = 0;
  let hight = list.length - 1;

  while (low <= hight) {
    const mid = Math.floor((low + hight) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess < item) {
      low = mid + 1;
    } else {
      hight = mid - 1;
    }
  }

  return null;
}

const result = binarySearch(list_of_items, 67);
console.log(result);
