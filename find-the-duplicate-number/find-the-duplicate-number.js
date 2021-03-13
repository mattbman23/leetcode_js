/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let storage = {};
    
    for (let num of nums) {
        if (storage[num]) {
            return num;
        } else {
            storage[num] = true;
        }
    }
};