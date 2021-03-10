// Given a signed 32-bit integer x, return x with its digits reversed.
// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

function reverseInt(number) {
  let isPositive = number > 0 ? true : false;
  let ans = 0;

  if (!isPositive) {
    number = Math.abs(number);
  }

  while (number > 0) {
    ans = ans * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  if (ans < Math.pow(2, 31) * -1 || ans > Math.pow(2, 31) - 1) return 0;

  return isPositive ? ans : -Math.abs(ans);
}

module.exports = reverseInt;
