/* 
Write a function called isSubsequence which takes in two strings 
and checks whether the characters in the first string form a
 subsequence of the characters in the second string. In other words,
  the function should check whether the characters in the first
   string appear somewhere in the second string,
    without their order changing.
*/

const isSubsequence = (substring, str) => {
  if (substring.length > str.length) {
    return false;
  }

  const typedSubstring = substring.split("");
  const typedString = str.split("");

  for (let i = 0; i < typedSubstring.length; i++) {
    const letterIndex = typedString.indexOf(typedSubstring[i]);

    if (letterIndex === -1) {
      return false;
    } else {
      typedString.splice(0, letterIndex + 1);
    }
  }

  return true;
};

/*
    Смысл решения в том, что есть два указателя
    указатель i двигается на подстроке если в основной строке
    находятся схожие буквы, если буквы отличаются то двигается 
    только второй указатель j
    Важные условия цикла: - j должна быть меньше длины основной строки 
    и как только указатель i доберётся до конца своей строки - т.е.
    найдёт все буквы своей подстроки в основной строке - цикл вернёт true
*/

function anotherSolution(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

/*
    Смысл данного решения с рекурсией в том, что если первые символы
    обоих массивов равны, то их исключают(обрезают массивы)
    Если символы не равны, то запускается рекурсия, которая уже на вход
    получает массив основной строки на 1 элемент меньше(элемент удаляется слева,
    так как он не равен нулевому элементу подстроки). Смысл в том, чтобы удалять
    элементы и там и там только тогда когда они равны, иначе удаляется элемент
    только справа.

    Условия по завершению рекурсии указаны вначале:
      if (str1.length === 0) return true; - это значит что все символы из подстроки
                                            нашлись в строке, всё ок, возвращаем true
      if (str2.length === 0) return false; - это значит что основная строка закончилась пока
                                             подстрока не закончилась, что говорит о том,
                                             что не все символы подстроки есть в символах основной 
                                             строки, всё не ок, false
*/

function anotherRecursiveSolution(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) {
    return anotherRecursiveSolution(str1.slice(1), str2.slice(1));
  }
  return anotherRecursiveSolution(str1, str2.slice(1));
}

console.log(isSubsequence("hello", "hel worlod")); // true
//                              i
//                                           j
// i = 0, j = 0
// i = 1, j = 0
// i = 1, j = 1

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
