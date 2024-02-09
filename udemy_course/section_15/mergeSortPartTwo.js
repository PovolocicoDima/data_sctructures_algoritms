/*
    Есть массив, он не отсортирован, его надо отсортировать.
    Мы делим его на две части по середине. И рекурсирвно
    сортируем сначала левую часть а потом и правую часть.
    Отсортированные части на последней итерации тоже сортируются
    и отдаются. 
    Время: O(n * log(n)) 
    Место: 0(n)
*/
const first  = [1, 14, 50]
const second = [2, 14, 99, 100]

function merge(arr1, arr2) {
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

function mergeSortWithRecursion(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSortWithRecursion(arr.slice(0, mid))
    let right = mergeSortWithRecursion(arr.slice(mid))
    return merge(left, right)
}

const unsorted = [3, 1, 15, 13, 22, 23, 99, 2, 10]

console.log(mergeSortWithRecursion(unsorted))