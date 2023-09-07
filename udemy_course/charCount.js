const str = "Your PINr numberr is 1234!";

function charCount(str) {
  const cleanString = str.match(/[a-z0-9]/gi);
  const result = {};
  for (let i = 0; i < cleanString.length; i += 1) {
    const keys = Object.keys(result);
    const item = cleanString[i].toLowerCase();
    if (!keys.includes(item)) {
      result[item] = 1;
    } else {
      result[item] += 1;
    }
  }

  return result;
}

console.log(charCount(str));
