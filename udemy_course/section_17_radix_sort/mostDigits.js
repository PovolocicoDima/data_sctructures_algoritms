function digitCountSecond(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function digitCount(arr) {
    let result = 0
    arr.map(item => {
        let temp = digitCountSecond(item)
        if (temp > result) {
            result = temp
        }
    })

    return result
}


console.log(digitCount([1, 234, 333333, 22]))
console.log(digitCount([1, 234, 333, 22]))
console.log(digitCount([1, 24, 33, 2]))
console.log(digitCount([1, 234, 333333, 22]))

