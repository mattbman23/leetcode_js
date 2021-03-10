// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Input: num = 3
// Output: "III"

const romanToInt = new Map([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
]);

// O(n) constant time complexity
// O(1) constant space complexity
function intToRoman(num) {
  let ans = '';

  romanToInt.forEach((value, key) => {
    while (num >= value) {
      ans += key;
      num -= value;
    }
  });

  return ans;
}

// console.log(intToRoman(1994));

module.exports = intToRoman;
