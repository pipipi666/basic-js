const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let cnt = 1;
    let j = i;
    while (arr[j] === arr[j + 1]) {
      j++;
      cnt++;
    }
    cnt > 1 && newArr.push(cnt);
    newArr.push(arr[i]);
    i = j;
  }
  return newArr.join('');
}

module.exports = {
  encodeLine
};
