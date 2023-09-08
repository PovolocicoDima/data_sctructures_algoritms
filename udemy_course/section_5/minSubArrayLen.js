/*
    Write a function called minSubArrayLen which accepts
    two parameters - an array of positive integers and
    a positive integer.

    This function should return the minimal length
    of a contiguous subarray of which the sum is
    greater than or equal to the integer passed to the function. 
    If there isn't one, return 0 instead.
    Examples:

    minSubArrayLen([2,3,1,2,4,3], 7) // 2 
        -> 
            because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 
        -> 
            because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 
        -> 
            because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
*/

// const ErrorminSubArrayLen = (arr, num) => {
//   let j = 2;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       return 1;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let tempSum = arr[i] + arr[i + 1];
//     if (tempSum >= num) {
//       return j;
//     } else {
//       tempSum = tempSum + arr[j - j];
//     }
//   }

//   return 0;
// };

function minSubArrayLen(nums, sum) {
  let minLen = Infinity;
  let total = 0;

  let start = 0;
  let end = 0;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
      /*  
            если тотал меньше предоставленного числа
            и это ещё не конец массива мы плюсуем все числа от начала и до конца
            total =  2 + 3 + 1 + 2(8), end: 4, start = 0, minLen = 4, 
            total = (-)  3 + 1 + 2(6), end: 4, 
            start = 1, 

            
        */
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

//                          total = 2 + 3 + 1 + 2
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
//

console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
