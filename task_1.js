// Q1. Maximum Rectangular Area in a Histogram

// Find the largest rectangular area possible in a given histogram where the largest rectangle
// can be made of a number of contiguous bars. For simplicity, assume that all bars have the same width
//and the width is 1 unit, there will be N bars height of each bar will be given by the array arr.

function maxRectangleArea(heights, len) {
  let maxArea = 0;
  const n = len;

  for (let i = 0; i < n; i++) {
    let minHeight = heights[i];

    for (let j = i; j >= 0; j--) {
      minHeight = Math.min(minHeight, heights[j]);
      const width = i - j + 1;
      const area = minHeight * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

const arr = [7, 2, 8, 9, 1, 3, 6, 5];
const n = 8;
console.log(maxRectangleArea(arr, n));
