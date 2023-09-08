const sameFrequency = (num1, num2) => {
  const typedNum1 = num1.toString();
  const typedNum2 = num2.toString();

  if (typedNum1.length !== typedNum2.length) {
    return false;
  }

  const hash1 = {};
  const hash2 = {};

  for (let key of typedNum1) {
    hash1[key] = hash1[key] + 1 || 1;
  }

  for (let key of typedNum2) {
    hash2[key] = hash2[key] + 1 || 1;
  }

  for (let key in hash1) {
    if (!(key in hash2)) {
      return false;
    }

    if (hash1[key] !== hash2[key]) {
      return false;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
