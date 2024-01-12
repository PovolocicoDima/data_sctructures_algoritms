/*
  суть в том, чтобы вытащить самое большое число наверх
  наверх - это в конец массива. Вытаскивание происходит через
  смену индекса между соседними цифрами, если предыдущее число
  arr[j] > arr[j + 1], то просходит их смена:
  [ arr[j], arr[j + 1]] = [ arr[j + 1], arr[j]]
  Для оптимизации используется первый прогон цикла с конца
  в начало, чтобы была возможность запустить встроенный цикл
  который идёт от начала до позиции граничущей с текущей(условие)
  for (let j = 0; j < i - 1; j++)
  Также для оптимизации используется переменная noSwap, которая 
  помогает отменить ненужный прогон по числам для свапа

*/

const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
};

// console.log(`result : ${bubbleSort([8, 1, 3, 6, 7, 9, 10])}`);

function newBubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
}

console.log(newBubbleSort([34, 22, 11, 3, 4, 1, 0]));
