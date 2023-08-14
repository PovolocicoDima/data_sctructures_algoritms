function lcs(string1, string2) {
  if (!string1 || !string2) {
    return {
      lcs: 0,
      offset: 0,
      sequence: "",
    };
  }

  let lcs = 0;
  let lastSubIndex = 0;
  let table = [];
  let len1 = string1.length;
  let len2 = string2.length;

  //   let row;
  //   let col;

  for (let row = 0; row <= len1; row += 1) {
    table[row] = [];

    for (let col = 0; col <= len2; col += 1) {
      table[row][col] = 0;
    }
  }

  for (let i = 0; i < len1; i += 1) {
    for (let j = 0; j < len2; j += 1) {
      if (string1[i] === string2[j]) {
        if (table[i][j] === 0) {
          table[i + 1][j + 1] = 1;
        } else {
          table[i + 1][j + 1] = table[i][j] + 1;
        }

        if (table[i + 1][j + 1] > lcs) {
          lcs = table[i + 1][j + 1];
          lastSubIndex = i;
        }
      } else {
        table[i + 1][j + 1] = 0;
      }
    }
  }

  return {
    lcs,
    offset: lastSubIndex - lcs + 1,
    sequence: string1.slice(lastSubIndex - lcs + 1, lastSubIndex + 1),
  };
}

console.log(lcs("hish", "fish")); // { lcs: 3, offset: 1, sequence: 'ish' }
console.log(lcs("vista", "hish")); // { lcs: 2, offset: 1, sequence: 'is' }
console.log(lcs("google", "abcdefgooglehijklm")); // { lcs: 6, offset: 0, sequence: 'google' }
console.log(lcs("0", 0)); // { lcs: 0, offset: 0, sequence: '' }
