/*
    Write a recursive function called fib which accepts a number
    and returns the nth number in the Fibonacci sequence.
     Recall that the Fibonacci sequence is the sequence
      of whole numbers 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ... which starts with 1 and 1,
       and where every number thereafter is equal to the sum of the previous two numbers.

*/

const fib = (index) => {
  if (index === 0 || index === 1) {
    return 1;
  }
  const line = [1, 1];
  let count = 2;

  while (index > count) {
    const result = line[line.length - 2] + line[line.length - 1];
    line.push(result);
    count++;
  }

  return line[line.length - 1];
};

const fibWithRecursion = (n) => {
  if (n <= 2) return 1;
  return fibWithRecursion(n - 2) + fibWithRecursion(n - 1);
};

console.log(fibWithRecursion(4)); // 3
console.log(fibWithRecursion(10)); // 55
console.log(fibWithRecursion(28)); // 317811
console.log(fibWithRecursion(35)); // 9227465
