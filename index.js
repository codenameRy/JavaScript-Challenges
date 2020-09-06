//Challenge 1 - Merge two sorted arrays . Javascript

//Write a function that takes two sorted lists of numbers and merges them into a single sorted list.

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19];

// Solution 1 - Fastest
//Time Complexity: O(n log n) time & O(n) space
function mergeTwo(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a,b) => a-b);
}

console.log(mergeTwo(arr1, arr2));

//Solution 2 - Slowest
//Time Complexity: O(n) time & O(n) space
function mergeTwo2(arr1, arr2) {
  let merged = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  while (current < (arr1.length + arr2.length)) {
      let unmerged1 = arr1[index1];
      let unmerged2 = arr2[index2];

      // if next comes from arr1
      if (unmerged1 < unmerged2) {
          merged[current] = unmerged1;
          index1++;

      // if next comes from arr2
      } else {
          merged[current] = unmerged2;
          index2++;
      }

      current++;
  }

  return merged;
}

mergeTwo2(arr1, arr2);

//Challenge 2
// //Challenge 5 - A maximal subarray
// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

// For instance:

// getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (take all)

// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

// getMaxSubSum([-1, -2, -3]) = 0

//Solution 1 - Kadane's Approach with For Loop and Math.max
//The time complexity of above solution is **O(n)**
let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum2 = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0;
  if(allPositives(arr)) return sum2(arr);

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}

console.log( maxSequence([-1, 2, 3, -9]) ) // 5
console.log( maxSequence([2, -1, 2, 3, -9]) ) // 6
console.log( maxSequence([-1, 2, 3, -9, 11]) ) // 11
console.log( maxSequence([-2, -1, 1, 2]) ) //3
console.log( maxSequence([100, -9, 2, -3, 5]) ) //100
console.log( maxSequence([1, 2, 3]) ) //6
console.log( maxSequence([-1, -2, -3]) ) //0


//Solution 2 - For.. of and Math.max
//The time complexity of above solution is **O(n)**

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0