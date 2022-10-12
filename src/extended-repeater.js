const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const value = str
  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  const separator = options.separator === undefined ? '+' : options.separator;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  const addition = options.addition === undefined ? '' : options.addition
  let res = ''
  for (let i = 0; i < repeatTimes; i++) {
    res += value;
    for (let j = 0; j < additionRepeatTimes; j++) {
      res += addition
      if (j !== additionRepeatTimes - 1) res += additionSeparator
    }
    if (i !== repeatTimes - 1) res += separator
  }
  return res;
}

module.exports = {
  repeater
};
