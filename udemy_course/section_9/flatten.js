/*
    Write a recursive function called flatten 
    which accepts an array of arrays and returns 
    a new array with all values flattened.
*/

const flatten = (multidimentionalArray) => {
  const result = [];

  function helper(arr) {
    if (!arr.length) {
      return;
    } else if (Array.isArray(arr[0])) {
      // удалить первый и сделать его реструктуризацию
      const rest = arr.slice(1);
      const first = arr.shift();
      arr = [...first].concat(...rest);
      return helper(arr);
    } else {
      result.push(arr[0]);
      helper(arr.slice(1));
    }
  }

  helper(multidimentionalArray);

  return result;
};

/*

    Почти тоже самое что и у меня
*/

function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3
