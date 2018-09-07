exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {

  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {

  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {
    // var usd = /^\$?[0-9]+\.?[0-9]?[0-9]?$/;
    // var check = usd.test(str);
    // if(check){
    //   return true;
    // }
    console.log('isusd: '+str);
    //return check;
    // console.log('isUSD: '+ str);
    // r.test(str);
    // if(str.match(/^\$?[0-9]+\.?[0-9]?[0-9]?$/)){
    //   return true;
    // }
    //return str.match(/^\$?[0-9][0-9,]*[0-9]\.?[0-9]{0,2}$/i);
  }
};