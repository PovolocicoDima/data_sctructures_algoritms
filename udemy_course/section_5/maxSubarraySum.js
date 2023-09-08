const maxSubarraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum; // 6
  /*
    должны смещать окно на одну позицию вперёд:
    смещать с конца на 1 вперёд и конечный элемент на 1 вперёд
    отчёт начинать с числа обозначающего длинную окна
    смещать на 1 назад можно по формуле i - num
    так как i начинается с числа длины окна, то и первое значение
    для смещения вправо будет 0: arr[i - num], i = num, i = 2, 2 - 2 = 0
                              1: arr[i - num], i = num, i = 3, 3 - 2 = 1
                              ....
    правый конец смещается сам за счёт условия цикла, так как конец
    задан как arr[i]
  */

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //  3        3    - arr[0](1)    + arr[2](3)
    //  5
    //  5
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
