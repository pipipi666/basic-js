const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    const val = value === undefined ? '' : value
    this.arr.push(`( ${val} )`)
    return this
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.arr.length) {
      this.arr.splice((position - 1), 1)
    }
    else {
      this.arr = []
      throw new Error('You can\'t remove incorrect link!')
    }
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    const res = this.arr.join('~~')
    this.arr = []
    return res
  }
};

module.exports = {
  chainMaker
};
