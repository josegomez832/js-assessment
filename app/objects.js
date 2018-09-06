exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
  	console.log(fn);
  	console.log(obj);
  	return fn(obj[2], obj[1]);
  },

  alterObjects: function(constructor, greeting) {

  },

  iterate: function(obj) {

  }
};
