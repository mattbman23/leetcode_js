/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length;
    
    while (left < right) {
        let curSum = numbers[left] + numbers[right];
        
        if (curSum === target) {
            return [++left, ++ right];
        } else if (curSum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    
    return null;
};