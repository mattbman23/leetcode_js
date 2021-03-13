/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let storage = {};
  let curMajority = 0;
  let answer;
    
  for (let num of nums) {
      storage[num] = storage[num] + 1 || 1;
  }
    
  for (let key in storage) {
      if (storage[key] > curMajority) {
          answer = key;
          curMajority = storage[key];          
      }
  }
    
  return answer;    
};