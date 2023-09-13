/*

    Write a recursive function called isPalindrome which returns 
    true if the string passed to it is a palindrome 
    (reads the same forward and backward). 
    Otherwise it returns false.

*/

const palindrome = (someString) => {
  const result = [];
  const item = [...someString];
  const itemCopy = [...someString];

  function helper(innerString) {
    if (!innerString.length) return;
    const letter = innerString.splice(innerString.length - 1, 1);
    result.push(letter);
    return helper(innerString);
  }

  helper(item);
  return result.toString() === itemCopy.toString();
};

/*
    Прикольный шаблон обрезания с разных концов одинаковых букв
    суть в том, что если это палендром, то и буквы с обоих концов
    должны быть одинаковыми, т.е если последняя и первая буквы
    равны => мы запускаем рекурсию с обрезанной на эти буквы строкой
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))

    и два базовых случая, если осталась одна буква(или может быть она была только
    одна передана) то это палиндром
    если остались две одинаковые, то если они равны => палиндром, если нет,
    то не палиндром
*/

function isPalindromeBest(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(palindrome("awesome")); // false
console.log(palindrome("foobar")); // false
console.log(palindrome("tacocat")); // true
console.log(palindrome("amanaplanacanalpanama")); // true
console.log(palindrome("amanaplanacanalpandemonium")); // false
