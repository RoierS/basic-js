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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if(!message || !key) {
      throw new Error ('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];
      if(char.match(/[A-Z]/)){
        let keyChar = key[keyIndex % key.length];;
        let keyCode = keyChar.charCodeAt(0) - 65;
        let charCode = char.charCodeAt(0) - 65;

        let encryptCode = (charCode + keyCode) % 26 + 65;
        let encryptedChar = String.fromCharCode(encryptCode);
        encrypted += encryptedChar;
        keyIndex++;
      } else encrypted += char;
    }
    if(!this.isDirect){
      encrypted = encrypted.split('').reverse().join('');
    }
    return encrypted;
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decrypted = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage .length; i++) {
      let char = encryptedMessage [i];
      if(char.match(/[A-Z]/)){
        let keyChar = key[keyIndex % key.length];;
        let keyCode = keyChar.charCodeAt(0) - 65;
        let charCode = char.charCodeAt(0) - 65;

        let decryptCode = (charCode - keyCode + 26) % 26 + 65;
        let decryptedChar = String.fromCharCode(decryptCode);
        decrypted += decryptedChar;
        keyIndex++;
      } else decrypted += char;
    }
    if(!this.isDirect){
      decrypted = decrypted.split('').reverse().join('');
    }
    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
