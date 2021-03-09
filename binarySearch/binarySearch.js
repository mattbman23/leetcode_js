// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// O(n) linear time complexity
// O(1) constant space complexity
function search(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

// console.log(search([-1, 0, 3, 5, 9, 12], 9));

module.exports = search;
