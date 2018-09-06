exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	console.log(str);
  	return str.split('', amount);
    //console.log(str, amount + ' reduceString');

  },

  wordWrap: function(str, cols) {
  
  },

  reverseString: function(str) {  	
    return str.split('').reverse().join('');
  }
};
