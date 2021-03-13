/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let results = [];
    let currentVal = 0;
    
    for (const num of nums) {
        currentVal += num;
        results.push(currentVal);
    }
    
    return results;
};