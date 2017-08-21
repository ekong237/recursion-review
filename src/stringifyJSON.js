// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

  // determine if string
    // if yes, add "" around string
    // return string
  // if input is array, loop through elements via stringifyJSON
    // concat each element
    // return string with brackets as a string
  // if input is object
    // for every element in object, stringify key and value
    // return "{stringified key value}"

var stringifyJSON = function(input) {
  if (input === null || typeof(input) === 'boolean' || typeof(input) === 'number'){
    return ''+input;
  } else if (typeof(input) === 'string'){
    return '"' + input + '"';
  } else if (Array.isArray(input)){
    var innerS = input.reduce(function(resultString, el, i){
      var intoString = stringifyJSON(el);
      if (i === input.length - 1){
        return resultString + intoString;
      }
        return resultString + intoString + ','; // if end of array don't add comma
    },'');
    return '[' + innerS + ']';
  } else if (typeof(input) === 'object'){
     var keys = Object.keys(input); 
     var innerO = keys.reduce(function(resultString, el, i){
       var objectKeyIntoString = stringifyJSON(el);
       var objectValIntoString = stringifyJSON(input[el]);
       if (typeof(objectValIntoString) === 'undefined' || typeof(objectValIntoString) === 'function'){  
          return '';
        } else {
          if (i === keys.length - 1){
           return resultString + objectKeyIntoString + ':' + objectValIntoString;
        }
        return resultString + objectKeyIntoString + ':' + objectValIntoString + ','; 
       }
    },'');
      return '{' + innerO + '}';
  } 
};







