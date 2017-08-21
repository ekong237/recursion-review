// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(input) {
  // determine if string
    // if yes, add "" around string
    // return string
  // if input is array, loop through elements via stringifyJSON
    // concat each element
    // return string with brackets as a string
  // if input is object
    // for every element in object, stringify key and value
    // return "{stringified key value}"
  if (typeof(input) === 'string'){
    return '"' + input + '"';
  } else if (Array.isArray(input)){
    var innerS = input.reduce(function(resultString, el, i){
      var intoString = stringifyJSON(el);
      return resultString + intoString + ',';
    },'');
    return '[' + innerS + ']';
  } else if (typof(input) === 'object'){
     var keys = Object.keys(input); 
     var innerO = keys.reduce(function(resultString, el, i){
       var objectIntoString = stringifyJSON(el);
       var objectValIntoString = stringifyJSON(input[i]);
       return resultString + objectIntoString + ':' + objectValIntoString + ',';
    },'');
      return '{' + innerO + '}';
  }
};
