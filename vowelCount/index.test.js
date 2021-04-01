const vowelCount = require('./index');
const should = require('should');

describe('vowel count', () => {
  it('should be a function', () => {
    vowelCount.should.be.a.Function;
  });

  it('should return { a: 2, e: 1, u: 1, i: 1 } given "matthew budiman" as the input', () => {
    let result = vowelCount('matthew budiman');
    result.should.be.eql({ a: 2, e: 1, u: 1, i: 1 });
  });
});
