/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    myObject = {
      name: 'Jose'
    };

    return myObject;
  },

  parseInt: function(num) {
    // console.log(num + ' parseInt');
    return parseInt(num,10);
  },

  identity: function(val1, val2) {
    console.log(' identity');

  }
};
