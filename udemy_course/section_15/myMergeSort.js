const first  = [1, 10, 50]
const second = [2, 14, 99, 100]

function mergeSort(arr1, arr2) {
    const result = []

    while(arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            result.push(...arr1.splice(0, 1))
        } else {
            result.push(...arr2.splice(0, 1))
        }
    }

    if (arr1.length === 0) {
        result.push(...arr2)
    } else if (arr2.length === 0) {
        result.push(...arr1)
    }


    return result
}


console.log(`result ${mergeSort(first, second)}`)