/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let users = new Set();
  let records = new Array(N + 1).fill(0);

  for (let [i, k] of trust) {
    users.add(i);
    records[k]++;
  }

  for (let i = 1; i < records.length; i++) {
    if (!users.has(i) && records[i] === N - 1) {
      return i;
    }
  }

  return -1;
};
