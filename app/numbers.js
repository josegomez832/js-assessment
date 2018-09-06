exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	console.log(num);
  	console.log(bit);
  	return bit ^ num;
  },

  base10: function(str) {
  	console.log(str + ' base10');
  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {

  }
};
