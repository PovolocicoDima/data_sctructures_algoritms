/*
  Этот алгоритм очень похож на бабл сорт, но тут
  не вытаскивается самое большое число в конец массива,
  а происходит смена позиции самого маленького числа в
  начало массива
  Пробегаюсь по массиву с первого числа, создается переменная,
  которая будет содержать в себе индекс минимального числа
  запускается второй цикл, который будет смотреть есть ли числа
  меньшие чем текущее минимальное число
  Оптимизация состоит в том, чтобы делать своп индексов
  только тогда, когда текущее минимальное не минимальному(т.к.
  это не имеет смысла)
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

// console.log(selectionSort([1, 2, -1, -2, 10, -5]));

function mySelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
}

console.log(mySelectionSort([1, 2, -3, -4, 0, 5]));
