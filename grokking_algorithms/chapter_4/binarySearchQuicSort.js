const list_of_items = [3, 5, 7, 8, 10, 13, 15, 19, 22, 35, 56, 67];

function binarySearchRecursion(list, item) {
  const listCopy = [...list];
  let low = 0;
  let hight = listCopy.length - 1;

  const mid = Math.floor((low + hight) / 2);
  const guess = listCopy[mid];

  if (list.length === 1) {
    return guess;
  }
  if (mid < item) {
    list.splice(0, mid + 1);
    binarySearchRecursion(list, item);
  }
  if (mid > item) {
    list.splice(mid - 1);
    binarySearchRecursion(list, item);
  }
}

console.log(binarySearchRecursion(list_of_items, 67));
