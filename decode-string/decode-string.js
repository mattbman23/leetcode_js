/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let repeatNum = [];
  let tempNum = '';
  let repeatStr = [];
  let ans = '';

  for (let char of s) {
    if (!isNaN(char)) {
      tempNum = `${tempNum}${char}`;
    } else if (char === '[') {
      repeatNum.push(tempNum);
      tempNum = '';

      repeatStr.push(ans);
      ans = '';
    } else if (char === ']') {
      ans = repeatStr.pop() + ans.repeat(repeatNum.pop());
    } else {
      ans += char;
    }
  }

  return ans;
};