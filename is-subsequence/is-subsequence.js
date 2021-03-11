/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sIdx = 0;
    
    for (let i =0 ;i< t.length;i ++) {
        if (s[sIdx] === t[i]) {
            sIdx++;
        }
        
        if (sIdx === s.length) {
            return true;
        }
    }
    
    if (sIdx === s.length) {
            return true;
        }
    
    return false;
};