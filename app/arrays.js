exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    console.log(arr);
    console.log(item);
    return arr.indexOf(arr[2], item);
  },

  sum: function(arr) {
    //console.log(arr);

    //http://stackoverflow.com/questions/16057672/sum-values-from-an-array-in-javascript
    var sum = arr.reduce(function sum(a, b){
      return a + b;
    }, 0);
    return sum;
    
  },

  remove: function(arr, item) {
    
   var removeItem = arr.filter(function(arr){
      return arr != item;
   })
   var result = removeItem;
   return result;
  },

  removeWithoutCopy: function(arr, item) {
    
    var copy = arr.map(function(arr){
      return arr != item;
    })
    //console.log(copy);
    //return copy;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    console.log('count: ' + item);
  },

  duplicates: function(arr) {
    console.log(arr);
  },

  square: function(arr) {

    var doubles = arr.map(function(arr){
      return arr * arr;
    });
    return doubles;

  },

  findAllOccurrences: function(arr, target) {

  }
};
