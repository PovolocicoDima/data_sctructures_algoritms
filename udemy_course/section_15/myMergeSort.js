/*
    Так как массивы уже отсортированы, то можно
    просо сравнивать первые числа этих массиво, 
    проверять какое из них меньшее, забирать из массива
    с помощью splice, а потому идти дальше. While будет
    работать пока какой-то из массивов не закончиться.
    Когда while отработает в результате в каком-то массиве
    будет пусто, а в другом будут ещё какие-то числа,
    вот эти числа мы и сливаем в результирующий массив
    Можно и через индексы перебирать массивы и в конце
    массив с большим числом элементов просто слить через его
    текущий индекс
*/

const first  = [1, 14, 50]
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