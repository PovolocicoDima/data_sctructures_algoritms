const naiveStringSearch = (longString, shortString) => {
  let totalCount = 0;
  let longStart = 0;
  let longEnd = longString.length - 1;
  let shortStart = 0;

  while (longStart <= longEnd) {
    if (longString[longStart] === shortString[shortStart]) {
      if (shortStart === shortString.length - 1) {
        totalCount++;
        shortStart = 0;
        longStart++;
      } else {
        shortStart++;
        longStart++;
      }
    } else {
      longStart++;
      shortStart = 0;
    }
  }

  return totalCount;
};

console.log(naiveStringSearch("lolkektloestsamloelolmamadimamlol", "lol"));
//                                              lol
