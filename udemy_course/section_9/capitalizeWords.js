/*
    Write a recursive function called 
    capitalizeWords. Given an array of words, 
    return a new array containing each word capitalized.
*/

const capitalizeWords = (arr) => {
  if (arr.length <= 1) return arr[0].toUpperCase();
  return (arr[0].toUpperCase() + "," + capitalizeWords(arr.slice(1))).split(
    ","
  );
};

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(["i", "am", "learning", "recursion"]));
