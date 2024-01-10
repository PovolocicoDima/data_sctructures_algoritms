const averagePair = (arr, avg) => {
  if (arr.length < 2) {
    return false;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    const searchedItem = avg * 2 - arr[i];
    const index = arr.indexOf(searchedItem);
    if (index !== -1) {
      return true;
    }
  }

  return false;
};

/*
    В этом способе есть два указателя, они задаются как крайний левый - 
    это начало массива и крайний правый это соответственно конец 
    массива. Устанавливается условие, что цикл работает пока левый край
    маньше правого(так как задумка в том, чтобы они сходились к центру 
    массива). Внутри цикла находится среднее арифметическое между крайним
    левым и правым значениями, если оно больше заданного условия num - 
    то соответсвенно надо увеличивать среднее арифметическое, а 
    так как у нас массив сортированный, то увеличить можно сместив
    левый указать на 1 индекс массива вперед, если же среднее арифметическое
    начальных значений ниже заданного, то наоборот надо число уменьшать,
    а это можно сделать через понижения правой границы, т.е.
    надо сделать end--
*/

const anotherSolution = (arr, num) => {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, -1, 6, 7], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
