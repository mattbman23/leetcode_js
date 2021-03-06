const allAnagrams = require('./allAnagrams');
const should = require('should');

xdescribe('allAnagrams', () => {
  it('should exist', function () {
    should.exist(allAnagrams);
  });

  it('should be a function', function () {
    allAnagrams.should.be.a.Function;
  });

  it('should return an array', function () {
    var result = allAnagrams('hello');
    should.exist(result);
    result.should.be.an.instanceof(Array);
  });

  it('should return an array with a single character', function () {
    var result = allAnagrams('a');
    result.should.be.eql(['a']);
  });

  it('should return an array of anagrams that contains `lives` for input `elvis`', function () {
    var result = allAnagrams('elvis');
    var found = result.indexOf('lives') !== -1;
    found.should.be.true;
  });

  it('should return an array of anagrams that contains `badcredit` for input `debitcard`', function () {
    var result = allAnagrams('debitcard');
    var found = result.indexOf('badcredit') !== -1;
    found.should.be.true;
  });

  it("should return all anagrams for 'ab'", function () {
    var expected = ['ab', 'ba'];
    var result = allAnagrams('ab');
    var found = false;
    var item;
    for (var i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      found.should.be.true;
    }
  });

  it("should return all anagrams for 'abc'", function () {
    var expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    var result = allAnagrams('abc');
    result.sort().should.be.eql(expected);
    var found = false;
    var item;
    for (var i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      found.should.be.true;
    }
  });

  it("should return all anagrams for 'apps'", function () {
    var expected = [
      'apps',
      'apsp',
      'aspp',
      'paps',
      'pasp',
      'ppas',
      'ppsa',
      'psap',
      'pspa',
      'sapp',
      'spap',
      'sppa',
    ];
    var result = allAnagrams('apps');
    var found = false;
    var item;
    var index;
    for (var i = 0; i < expected.length; i++) {
      item = expected[i];
      found = result.indexOf(item) !== -1;
      // we should have found the current expected anagram item in your
      // `result` array but we did not!
      found.should.be.true;
    }
  });

  it("should return all __unique__ anagrams for 'apps'", function () {
    // if you've gotten this far, you're doing awesome. this last test
    // is to check if you're returning an anagram array without duplicates
    var expected = [
      'apps',
      'apsp',
      'aspp',
      'paps',
      'pasp',
      'ppas',
      'ppsa',
      'psap',
      'pspa',
      'sapp',
      'spap',
      'sppa',
    ];
    var match = true;
    var result = allAnagrams('apps');
    result.length.should.be.equal(expected.length);
  });
});
