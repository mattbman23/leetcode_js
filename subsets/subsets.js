/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    
    while(nums.length !== 0) {
        let curVal = nums.shift();
        let subArr = result.slice();
        
        result.push([curVal]);
        for (let i = 0; i < subArr.length; i++) {
            result.push([...subArr[i], curVal]);
        }        
    }
    
    result.unshift([]);
    return result;    
};