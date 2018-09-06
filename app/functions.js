exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    //console.log(sayIt('hello'));
  },

  speak: function(fn, obj) {
    // var result = sayIt(obj.greeting + ', ' + obj.name+'!!!');
    // return result;

    //sayIt(obj.greeting + ', ' + obj.name+'!!!');
  },

  functionFunction: function(str) {
    console.log(str + ' functionFunction');
    function hello(){
      function world(){
        return ', Rebecca';
      }
      return str + world;

    }
    hello();

    // var name = function name(arg){
    //   return str + ', ' + arg;
    // }
    // return name;
  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
