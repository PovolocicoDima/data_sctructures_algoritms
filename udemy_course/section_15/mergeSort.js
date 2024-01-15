/*
  Суть в том, чтобы разделить массив чисел
  на отдельные массивы(по 0/1 числу в массиве)
  а затем постепенно сливать массивы поочереди
  одновременно сортируя их
*/

function sortTwoArrays(first, second) {
  const result = [];

  while (first.length && second.length) {
    if (first[0] < second[0]) {
      const item = first.splice(0, 1);
      result.push(...item);
    } else {
      const item = second.splice(0, 1);
      result.push(...item);
    }
  }

  if (second.length) {
    result.push(...second);
  } else if (first.length) {
    result.push(...first);
  }

  return result;
}

console.log(sortTwoArrays([1, 10, 50, 101, 102], [2, 14, 99, 100]));
