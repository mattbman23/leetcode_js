/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.trim() === "") return 0;
    
    let strArray = s.trim().split(" ");
    let lastIdx = strArray.length - 1;
    
    return strArray[lastIdx].length;
};