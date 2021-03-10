const intToRoman = require('./intToRoman');
const should = require('should');

describe('intToRoman', () => {
  it('should exist', function () {
    should.exist(intToRoman);
  });

  it('should be a function', function () {
    intToRoman.should.be.a.Function;
  });

  it('should return III for 3', () => {
    var result = intToRoman(3);
    should.equal(result, 'III');
  });

  it('should return IV for 4', () => {
    var result = intToRoman(4);
    should.equal(result, 'IV');
  });

  it('should return IX for 9', () => {
    var result = intToRoman(9);
    should.equal(result, 'IX');
  });

  it('should return LVIII for 58', () => {
    var result = intToRoman(58);
    should.equal(result, 'LVIII');
  });

  it('should return MCMXCIV for 1994', () => {
    var result = intToRoman(1994);
    should.equal(result, 'MCMXCIV');
  });
});
