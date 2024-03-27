/**
 * Memoization
 *
 * Storing the results of expensive fucntion calls and returning the cached
 * result when the same inputs occur again
 */

/**
 * time - O(N)
 */
function memoizedFibo(n, memo = []) {
  // проверяем есть ли сохраненнное значение, если есть то возвращаем
  if (memo[n] !== undefined) return memo[n]
  // базовый случай
  if (n <= 2) return 1
  // сохраняем результат операции (он сохраняется один раз для каждого значения)
  let res = memoizedFibo(n - 2, memo) + memoizedFibo(n - 1, memo)
  // запоминаем результат (сама мемоизация)
  memo[n] = res
  return res
}

console.log(memoizedFibo(100))
