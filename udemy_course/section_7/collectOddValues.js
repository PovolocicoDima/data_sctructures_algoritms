const collectOddValues = (arr) => {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
};

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function pureRecursionOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  /*
    В данном случае, это не просто рекурсивная функция внутри другой функции, которая
    использует переменные вне её контекста, чтобы их не перезаписывать.
    Данный способ использует рекурсия ровно тогда, когда аккумуляторная переменная
    корректно перезаписана, но функция не вернула её значение.
    Проще говоря аккумулятор замыкается на себе стек вызовов и в данном случае
    конкатенирует числа, которые соответствуют условию (arr[0] % 2 !== 0) и остальной массив (-1) первый элемент
  */
  newArr = newArr.concat(pureRecursionOddValues(arr.slice(1)));
  return newArr;
}

console.log(pureRecursionOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
