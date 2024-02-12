const unsorted = [4, 6, 9, 1, 2, 5]

function swap(arr, idx1, idx2) {
    const temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
  }

function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
            // console.log(arr)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}


/*
    Как работает: мы выставляем каждое число на своё место.
    Важно, что мы это делаем не создавая новые массивы, а 
    проходимсся по одному и тому же.
    Вспомогательная функция pivot принимает массив, индексы начала
    и конца массива. Потом проходится по массиву и ставит первый индекс на
    своё место, где бы он лежал будь этот массив отсортирован и возвращает
    этот индекс. По сути разделив этот массив на 2 части -
    левая часть: числа меньше (который уже на своём месте)
    правая часть: числа больше
    Потом в работу вступает рекурсия, где базовое условие это то, чтобы
    левый индекс был меньше правого, т.е. чтобы массив был не пустым
    Time  : O(N * LOG(N))
    Space : O(N * LOG(N))
    BEST TIME : O(N * LOG(N))
    WORST TIME: O(N * N)
*/


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left <  right) {
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIndex - 1)
        // right
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

console.log(quickSort(unsorted))

