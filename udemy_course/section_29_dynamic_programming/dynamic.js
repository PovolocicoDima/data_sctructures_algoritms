/**
 * Dynamic programming is:
 *
 * A method for solving complex problem by breaking
 * it down into a collection of simpler subproblems,
 * solving each of those subproblems just once,
 * and storing their solutions.
 */

/**
 * Overlapping subproblems:
 *
 * A problem is said to have OVERLAPPING SUBPROBLEMS if it can be
 * broken down into subproblems which are reused several times
 *
 * Example: Fibonacci sequence: Every number after the first two is the sum
 * of the two preceding ones
 */

/**
 * Optimal substructure
 *
 * A problem is said to have a optimal substructure if an optimal solution
 * can be constructed from optimal solutions of its subproblems.
 */

/**
 * 1 1 2 3 5 8 13 21 34 55
 * time = O(2 ^ N)
 */
function fib(num) {
  if (num <= 2) return 1
  return fib(num - 2) + fib(num - 1)
}

console.log(fib(30))
