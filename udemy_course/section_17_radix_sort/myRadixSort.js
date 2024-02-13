function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function getDigit(num, idx) {
    return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10
}

function maxDigitCount(arr) {
    let result = 0
    arr.map(item => {
        let temp = digitCount(item)
        if (temp > result) {
            result = temp
        }
    })

    return result
}

/*
    Суть в том, чтобы не сравнивать числа между собой,
    а сравнивать их байт-к-байту(byte-by-byte)
    Это значит, что, вместо того, чтобы проверить какое
    число больше или меньше текущего надо распределять
    числа каждый в свою колонку(bucket) или ведро.
    Распределение происходит по порядку начиная с крайней
    правой цифры каждого числа.
    Алгоритм выглядит так: мы выявляем какое наибольшее количество
    цифр в числах у неотсортированного массива и делаем обход на это
    количество. Внутри делаем ещё 1 цикл, который уже перебирает
    все числа из массива. Мы должны на каждой большой итерации
    распределять числа массива каждый в свою корзину по текущей цифре.
    После каждого большого цикла массив надо пересобирать по порядку:
    nums = [].concat(...digitBuckets)
    После всех проходов мы просто возвращаем отсортированный массив.
    Time Best    : O(n * k)
    Time Average : O(n * k)
    Time Worst   : O(n * k)
    Space        : O(n + k)
*/

function radixSort(nums) {
    let maxDigitsCount = maxDigitCount(nums)
    for (let k = 0; k < maxDigitsCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let currentItem = nums[i]
            let currentDigit = getDigit(nums[i], k)
            digitBuckets[currentDigit].push(currentItem)
        }

        nums = [].concat(...digitBuckets)
    }

    return nums
}

console.log(radixSort([76, 44, 88, 52, 1, 3333, 45, 999, 0, -6]))