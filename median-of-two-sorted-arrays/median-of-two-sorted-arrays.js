/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // faltten array
    let flattenArr = [...nums1, ...nums2];
    
    // sort array for double check
    flattenArr.sort((a, b) => a-b);
    
    // check if array length is old or even
    // if old, just take exact element else get the 2 centered elements and find the average between them
    if (flattenArr.length % 2 === 0) {
        let midPoint = flattenArr.length / 2;
        return (flattenArr[midPoint] + flattenArr[midPoint - 1]) / 2;
    } else {
        return flattenArr[Math.floor(flattenArr.length / 2)];
    }
};