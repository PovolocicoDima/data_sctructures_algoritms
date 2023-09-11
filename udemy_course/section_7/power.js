/*

    Write a function called power which accepts a base and an exponent.
    The function should return the power of the base to the exponent. 
    This function should mimic the functionality of Math.pow() - 
    do not worry about negative bases and exponents.

    Write a function factorial which accepts a number and returns the factorial
     of that number. A factorial is the product of an integer and all the integers
      below it; e.g., factorial four ( 4! ) is equal to 24,
       because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/

const power = (base, exponent) => {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
};

console.log(power(2, 3));

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
