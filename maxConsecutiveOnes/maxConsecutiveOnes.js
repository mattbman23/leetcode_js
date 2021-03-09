// Given a binary array, find the maximum number of consecutive 1s in this array.

// input: [1,1,0,1,1,1]
// output: 3

// O(n) linear time complexity
// O(1) constant space complexity
function findMaxConsecutiveOnes(arr) {
  let maxOnes = 0;
  let curOnes = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === 1) {
      curOnes += 1;
      maxOnes = curOnes > maxOnes ? curOnes : maxOnes;
    } else {
      maxOnes = curOnes > maxOnes ? curOnes : maxOnes;
      curOnes = 0;
    }
  }

  return maxOnes;
}

// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));

module.exports = findMaxConsecutiveOnes;
