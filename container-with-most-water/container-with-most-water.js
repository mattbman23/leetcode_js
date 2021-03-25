/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {      
    let max = 0;
    
    // brute force method
    // Time:    O(N^2)  
    // Space:   O(1)
    // for (let i = 0; i < height.length; i++) {
    //     for (let k = 0; k < height.length; k++) {
    //         let curMax = Math.min(height[i], height[k]) * [k - i];
    //         max = Math.max(curMax, max);
    //     }
    // }
    
    // two pointer
    // Time:    O(N)  
    // Space:   O(1)
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let curMax = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(curMax, max);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return max;
};