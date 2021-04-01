const twoSum = require('./twoSum');
const should = require('should');

xdescribe('twoSum', () => {
  it('should exist', function () {
    should.exist(twoSum);
  });

  it('should be a function', function () {
    twoSum.should.be.a.Function;
  });

  it('should return [0, 1] for [2, 7, 11, 15] with a target of 9', () => {
    twoSum([2, 7, 11, 15], 9).should.be.eql([0, 1]);
  });

  it('should return [1, 2] for [3, 2, 4] with a target of 6', () => {
    twoSum([3, 2, 4], 6).should.be.eql([1, 2]);
  });

  it('should return [0, 1] for [3, 3] with a target of 6', () => {
    twoSum([3, 3], 6).should.be.eql([0, 1]);
  });
});
