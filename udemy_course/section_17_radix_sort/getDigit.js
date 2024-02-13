

function getDigit(num, idx) {
    const numbToStr = num.toString()
    if (idx > numbToStr.length - 1) {
        return null
    }

    const result = numbToStr[numbToStr.length - 1 - idx]
    if (result === '-') {
        return;
    }

    return Number(result)
}

function getDigitSecond(num, idx) {
    return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10
}

console.log(getDigitSecond(-12345, 0))
console.log(getDigitSecond(12345, 1))
console.log(getDigitSecond(-12345, 2))


// console.log(getDigit(12345, 3))
// console.log(getDigit(12345, 4))
// console.log(getDigit(12345, 5))