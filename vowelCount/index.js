// write a function that return the number of vowels

const vowelCount = (str) => {
  const vowels = 'aeiou'.split('');
  const storage = {};

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      storage[str[i]] = storage[str[i]] + 1 || 1;
    }
  }

  return storage;
};

module.exports = vowelCount;
