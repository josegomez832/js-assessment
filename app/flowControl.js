exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
    //console.log('FizzBuzz: ' + num);
    function jose(){
        if(num % 3 === 0){
            return 'Fizz';
        }
        else if(num % 5 === 0){
            return 'Buzz';
        }

    }
   
  }
};
