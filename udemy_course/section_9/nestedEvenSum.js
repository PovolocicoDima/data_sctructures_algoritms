/*
    Write a recursive function called nestedEvenSum. 
    Return the sum of all even numbers in an 
    object which may contain nested objects.
*/

const nestedEvenSum = (obj) => {
  let count = 0;

  function helper(innerObj) {
    for (const [key, value] of Object.entries(innerObj)) {
      if (typeof value === "object") {
        helper(value);
      } else {
        count += value % 2 === 0 ? value : 0;
      }
    }

    return;
  }

  helper(obj);

  return count;
};

function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
