/*
    Write a recursive function called reverse 
    which accepts a string and returns a new string in reverse.
*/

const reverse = (str) => {
  const item = str.split("");
  const result = [];

  function inner(innerItem) {
    if (!innerItem.length) {
      return;
    }
    const letter = innerItem.splice(innerItem.length - 1, 1);
    result.push(letter);
    return inner(innerItem);
  }

  inner(item);

  return result.join("");
};

function reverseBest(str) {
  if (str.length <= 1) return str;
  return reverseBest(str.slice(1)) + str[0];
}

/*
  Выносим первый элемент за стэк вызовов и на него же уменьшаем каждый раз
  передаваемую строку и базовый случай у нас получается как 
  длина строки === 1, т.е. одной букве, её мы и возвращаем,
  после чего стек начинает раскручиваться обратно
*/

function test(str) {
  if (str.length <= 1) return str;
  return test(str.slice(1)) + str[0];
}

console.log(reverse("awesome"));
console.log(reverse("rithmschool"));

console.log(reverseBest("awesome"));
//  a
//  wesome
//   w
//   esome
//    e
//     some
//     s
//      ome
//      o
//       me
//        m
//         e
//         => e + m + o + s + e + w + a

console.log(reverseBest("rithmschool"));

console.log(test("test"));
