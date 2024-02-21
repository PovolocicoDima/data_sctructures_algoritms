/*
  sum(1)(2, 3)(4)
  1) функция должна корректно обрабатывать несколько
  последовательных вызовов с любым количеством аргументов
  2) каждый вызов с аргументами должен прибавлять эти значения
  к общей сумме
  3) если функция вызвана без аргументов, то возвращать текущее значение
  суммы
*/

function sum(...args1) {
  let total = args1.reduce((sum, el) => (sum += el), 0);

  function inner(...innerArgs) {
    if (!innerArgs.length) return total;
    total += innerArgs.reduce((sum, el) => (sum += el), 0);
    return inner;
  }

  return inner;
}

console.log(sum(2, 3)(3)(4)());
