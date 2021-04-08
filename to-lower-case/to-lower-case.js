/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    // return str.toLowerCase();
    
    let ans = '';
    
    for (let i = 0; i < str.length; i++) {
        ans += str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91 ? String.fromCharCode(str.charCodeAt(i) + 32) : str[i];
    }
    
    return ans;
};