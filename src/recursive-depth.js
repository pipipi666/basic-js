const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach(x => {
      let cnt = 1;
      if (Array.isArray(x)) cnt += this.calculateDepth(x)
      if (cnt > depth) depth = cnt;
    })
    return depth
  }
}

module.exports = {
  DepthCalculator
};
