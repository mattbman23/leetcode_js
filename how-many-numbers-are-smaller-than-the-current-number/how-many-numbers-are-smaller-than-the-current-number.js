/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) { 
    return nums.map(num => [...nums].sort((a, b) => a - b).indexOf(num));
};