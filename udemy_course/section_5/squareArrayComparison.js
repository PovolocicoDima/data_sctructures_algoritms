const comparisonOfSquareArrays = (arr1, arr2) => {
  const sqaredFirst = arr1.map((e) => e * e);
  return (
    sqaredFirst.length === arr2.length &&
    arr2.every((e) => sqaredFirst.includes(e))
  );
};

// console.log(comparisonOfSquareArrays(first, second));

const secondVarian = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const hash1 = {};
  const hash2 = {};

  for (let i = 0; i < arr1.length; i++) {
    currentItem = arr1[i];
    hash1[currentItem] = hash1[currentItem] + 1 || 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    currentItem = arr2[i];
    hash2[currentItem] = hash2[currentItem] + 1 || 1;
  }

  console.log(hash1);
  console.log(hash2);

  for (let key in hash1) {
    if (!(key ** 2 in hash2)) {
      return false;
    }

    if (hash1[key] !== hash2[key ** 2]) {
      return false;
    }
  }

  return true;
};

const first = [1, 2, 2, 3, 3, 3, 4];

const second = [1, 4, 4, 9, 9, 9, 16];

console.log(secondVarian(first, second));
