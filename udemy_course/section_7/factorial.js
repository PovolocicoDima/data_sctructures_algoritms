const renderFactorial = (num) => {
  let total = 1;

  while (num > 1) {
    total = total * num;
    num--;
  }

  return total;
};

console.log(renderFactorial(5));

const recursionFactorial = (num) => {
  if (num <= 1) return 1;

  return num * recursionFactorial(num - 1);
};

console.log(recursionFactorial(5));
