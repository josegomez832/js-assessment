exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	console.log(start + ' ' + end + ' count');
  }
};
