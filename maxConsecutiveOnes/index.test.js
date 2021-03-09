const maxConsecutiveOnes = require('./maxConsecutiveOnes');
const should = require('should');

describe('maxConsecutiveOnes', function () {
  it('should exist', function () {
    should.exist(maxConsecutiveOnes);
  });

  it('should be a function', function () {
    maxConsecutiveOnes.should.be.a.Function;
  });

  it('should return 3 for [1,1,0,1,1,1]', function () {
    var result = maxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
    should.equal(result, 3);
  });

  it('should return 0 for [0,0,0]', function () {
    var result = maxConsecutiveOnes([0, 0, 0]);
    should.equal(result, 0);
  });

  it('should return 0 for [-1]', function () {
    var result = maxConsecutiveOnes([-1]);
    should.equal(result, 0);
  });
});
