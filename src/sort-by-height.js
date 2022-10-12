const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = [...arr].filter(x => x !== -1).sort(function (a, b) {
    return a - b;
  });
  const newArr = [];
  arr.forEach(x => {
    if (x === -1) newArr.push(x);
    else {
      newArr.push(sorted[0]);
      sorted.splice(0, 1);
    }
  })
  return newArr;
}

module.exports = {
  sortByHeight
};
