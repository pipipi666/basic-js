const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isReverse) {
    this.reverse = isReverse;
    this.abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  encrypt(str, word) {
    if (!str || !word) throw new Error('Incorrect arguments!')
    str = str.toUpperCase().split('');
    word = word.toUpperCase().split('');
    let wordIndex = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.abc.includes(str[i])) {
        str[i] = this.abc[(this.abc.indexOf(str[i]) + this.abc.indexOf(word[wordIndex % word.length])) % this.abc.length]
        wordIndex++;
      }
    }
    if (this.reverse === false) return str.reverse().join('')
    return str.join('');
  }
  decrypt(str, word) {
    if (!str || !word) throw new Error('Incorrect arguments!')
    str = str.toUpperCase().split('');
    word = word.toUpperCase().split('');
    let wordIndex = 0;
    for (let i = 0; i < str.length; i++) {
      if (this.abc.includes(str[i])) {
        str[i] = this.abc[(this.abc.indexOf(str[i]) - this.abc.indexOf(word[wordIndex % word.length]) + this.abc.length) % this.abc.length]
        wordIndex++;
      }
    }
    if (this.reverse === false) return str.reverse().join('')
    return str.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
