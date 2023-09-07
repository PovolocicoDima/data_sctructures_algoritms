function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  if (word1.length === 0 && word2.length === 0) {
    return true;
  }

  const hash1 = {};
  const hash2 = {};

  for (let i = 0; i < word1.length; i++) {
    const currentLetter = word1[i];
    hash1[currentLetter] = hash1[currentLetter] + 1 || 1;
  }

  for (let i = 0; i < word2.length; i++) {
    const currentLetter = word2[i];
    hash2[currentLetter] = hash2[currentLetter] + 1 || 1;
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
}
