/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  const sortedInt = intervals.slice().sort((a, b) => a[0] - b[0]);
  let ans = [];
  let curFirst = undefined;
  let curLast = undefined;

  for (let i = 0; i < sortedInt.length; i++) {
    if (curFirst === undefined) {
      curFirst = sortedInt[i][0];
      curLast = sortedInt[i][1];
    } else if (curLast < sortedInt[i][0]) {
      ans.push([curFirst, curLast]);
      curFirst = sortedInt[i][0];
      curLast = sortedInt[i][1];
    } else if (curLast >= sortedInt[i][0]) {
      curLast = sortedInt[i][1] > curLast ? sortedInt[i][1] : curLast;
    }
  }

  ans.push([curFirst, curLast]);
    
  return ans;
};