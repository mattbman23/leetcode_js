/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let sum = nums.reduce((acc, cur) => acc * cur);
    
    return sum > 0 ? 1 : sum < 0 ? -1 : 0;
};