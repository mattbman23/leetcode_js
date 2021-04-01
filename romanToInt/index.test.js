const romanToInt = require('./romanToInt');
const should = require('should');

xdescribe('romanToInt', () => {
  it('should exist', function () {
    should.exist(romanToInt);
  });

  it('should be a function', function () {
    romanToInt.should.be.a.Function;
  });

  it('should return 3 for III', () => {
    var result = romanToInt('III');
    should.equal(result, 3);
  });

  it('should return 4 for IV', () => {
    var result = romanToInt('IV');
    should.equal(result, 4);
  });

  it('should return 9 for IX', () => {
    var result = romanToInt('IX');
    should.equal(result, 9);
  });

  it('should return 58 for LVIII', () => {
    var result = romanToInt('LVIII');
    should.equal(result, 58);
  });

  it('should return 1994 for MCMXCIV', () => {
    var result = romanToInt('MCMXCIV');
    should.equal(result, 1994);
  });
});
