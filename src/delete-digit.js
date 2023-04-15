const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let stringN = String(n);
  for (let i = 0; i < stringN.length; i++) {
    if (stringN[i] < stringN[i + 1]) {
      return Number(stringN.slice(0, i) + stringN.slice(i + 1));
    }
  }
  return Number(stringN.slice(0, -1));

}

module.exports = {
  deleteDigit
};
