/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    
    // for (let i = 0; i < nums.length; i++) {
    //     let tempArr = nums.slice();
    //     tempArr.splice(i, 1);
    //     let currentProduct = tempArr.reduce((acc,cur) => cur * acc);
    //     output.push(currentProduct);
    // }
    
    let leftProd = 1;
    let rightProd = 1;
    
    for (let i = 0; i < nums.length; i++) {
        output[i] = leftProd;
        leftProd  *= nums[i]
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= rightProd;
        rightProd *= nums[i];
    }
    
    return output;
};