

function digitCount(num) {
    const numberToStr = num.toString()
    if (numberToStr[0] === '-') {
        return numberToStr.length - 1
    } else {
        return numberToStr.length
    }
}

function digitCountSecond(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

console.log(digitCountSecond(-0))
console.log(digitCountSecond(-125))
console.log(digitCountSecond(-12345))


// console.log(digitCount(33))
// console.log(digitCount(-12345))
// console.log(digitCount(-123451231231))