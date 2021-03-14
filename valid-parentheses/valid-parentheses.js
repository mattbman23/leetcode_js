/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {  
    let stack = [];
    let pairs = { '{': '}', '[': ']', '(': ')' };
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (pairs[char]) {
            stack.push(char)
        } else if (char === '}' || ']' || ')') {
            if (pairs[stack.pop()] !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};