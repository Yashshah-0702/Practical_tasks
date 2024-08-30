/*
Q2. Merge Without Extra Space

Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. 
Merge them in sorted order without using any extra space. 
Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements. 
*/

function mergeArrays(arr1, arr2, n, m) {
  for (let i = 0; i < n; i++) {
    if (arr1[n - 1 - i] > arr2[i]) {
      let temp = arr1[n - 1 - i];
      arr1[n - i - 1] = arr2[i];
      arr2[i] = temp;
    }
  }

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
}

const n = 4;
const arr1 = [10, 15, 16, 17];
const m = 3;
const arr2 = [5, 18, 20];

mergeArrays(arr1, arr2, n, m);

console.log(arr1, `arr1`);
console.log(arr2, `arr2`);
