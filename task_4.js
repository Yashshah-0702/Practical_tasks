/*
Q4. Subarray with 0 sum

Given an array of positive and negative numbers. Find if there is a subarray (of size at-least one) with 0 sum. 
*/

function zeroSubArray(arr) {
  const sumSet = new Set();
  let currentSum = 0;
  let startIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === 0) {
      return `yes Subarray:${arr.slice(0, i + 1)}`;
    }

    if (sumSet.has(currentSum)) {
      startIndex = [...sumSet].indexOf(currentSum);
      return `yes Subarray:${arr.slice(startIndex + 1, i + 1)}`;
    }

    sumSet.add(currentSum);
  }
  return "no";
}

const arr1 = [4, 2, 0, 1, 6];
const arr2 = [4, 2, -3, 1, 6];
console.log(zeroSubArray(arr1));
console.log(zeroSubArray(arr2));

