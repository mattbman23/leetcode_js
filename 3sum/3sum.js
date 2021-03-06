/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
     const answer = [];

  if (nums.length < 3) return answer;

  nums = nums.sort((a, b) => a - b);

  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > target) break;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let curSum = nums[i] + nums[left] + nums[right];
      
      if (curSum === target) {
        answer.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (curSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return answer;
};