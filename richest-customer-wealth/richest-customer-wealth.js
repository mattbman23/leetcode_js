/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxWealth = 0;
    
    for (account of accounts) {
        let totalSum = 0;
        for (sum of account) {
            totalSum += sum;
        }
        if (totalSum > maxWealth) {
            maxWealth = totalSum
        }
    }
    
    return maxWealth;
};