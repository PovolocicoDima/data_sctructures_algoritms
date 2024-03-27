/**
 * Tabulation
 *
 * Storing the result of the previous result in a "table"(usually an array)
 * Usually done using iteration
 *
 * Better space complexity can be achieved using tabulation
 *
 * This is also called "button up" approach
 *
 * Данный метод предпочтительней мемоизации в контексте данной задачи
 * тем, что он не использует рекурсию. При очень больших значениях рекурсия
 * может забить весь call stack и мы получим ошибку.
 * На примере значения:
 * memoizedFibo(10000) // error
 * tabulatedFibo(10000) // Infinity
 *
 * time - O(N)
 */

function tabulatedFibo(n) {
  if (n <= 2) return 1
  const fibNums = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
  }

  return fibNums[n]
}

console.log(tabulatedFibo(100))
