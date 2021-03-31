/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    return s.split('').filter((char) => !'aeiou'.includes(char)).join('');
};