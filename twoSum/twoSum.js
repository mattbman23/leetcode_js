// Given an array of integers, return indices of the two numbers such that they add up to a specific target

// input: [1, 2, 7, 11, 15] with a target of 9
// output: [1, 2]

// O(n) linear time
// O(1) constant space
const twoSum = (arr, target) => {
  let storage = {};

  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]] >= 0) {
      return [storage[arr[i]], i];
    }

    storage[target - arr[i]] = i;
  }

  return storage;
};

module.exports = twoSum;
