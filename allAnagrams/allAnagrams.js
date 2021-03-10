/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array.
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

function allAnagrams(string) {
  let ans = {};

  const getAnagrams = (val, options) => {
    if (val.length === string.length) {
      ans[val] = true;
    }

    for (let i = 0; i < options.length; i++) {
      getAnagrams(val + options[i], options.slice(0, i) + options.slice(i + 1));
    }
  };

  getAnagrams('', string);

  return Object.keys(ans);
}

module.exports = allAnagrams;
