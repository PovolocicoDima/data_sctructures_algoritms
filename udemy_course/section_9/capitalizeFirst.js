/*
    Write a recursive function called capitalizeFirst. 
    Given an array of strings, capitalize the first 
    letter of each string in the array.

*/

const capitalizeFirst = (arr) => {
  const result = [];

  function helper(innerArr) {
    if (!innerArr.length) return;
    const firstItem = innerArr[0];
    const firstLetter = firstItem[0].toUpperCase();
    const rest = firstItem.slice(1);
    result.push(firstLetter + rest);

    return helper(innerArr.slice(1));
  }

  helper(arr);

  return result;
};

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"]));
