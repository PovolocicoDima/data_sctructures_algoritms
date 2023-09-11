/*
    Write a function called findLongestSubstring, 
    which accepts a string and returns the length 
    of the longest substring with all distinct characters.

*/

function findLongestSubstring(str) {
  //declare longest, i.e. length of the substring
  let longest = 0;

  //declare a frequency counter to track what characters the function has accessed so far
  let seen = {};

  //declare a starting index for the opening of the window
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    //if that character already exists in the frequency counter, you have a repeat,
    //so you'll have to increment the starting index (he does this in an unnecessarily
    //complicated way, rather than just start++)
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    //if that character doesn't exist as a key in the object yet,
    //then it's unique, so set longest to f i - start + 1
    //IF it's is greater than the current longest. this is also a weird way to do this.
    //a simpler way would have been to have a currentLongest and maxLongest or something like that.
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    //I don't understand this. it seems you could set it to anything because the function just checks if it exists or not.
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring("")); // 0
//                                   i
console.log(findLongestSubstring("rithmschool")); // 7 rithmsc
//                                       j
//                                  i
console.log(findLongestSubstring("thisisawesome")); // 6 awesom
//                                    j
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6
