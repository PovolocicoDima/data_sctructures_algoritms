const unsorted = [4, 8, 2, 1, 5, 7, 6, 3]

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

console.log(pivot(unsorted))