// Codepen Examples

// Return single string
var letters = ['c','o','d', 'e', 'f', 'e', 'l', 'l', 'o', 'w', 's'];

function getWord(array){
    var wholeWord = '';
    for(var i = 0; i < array.length; i++){
        wholeWord = wholeWord + array[i];
    }
    return wholeWord;
}

console.log(getWord(letters));



// Return string
var firstName = 'Slim';
var lastName = 'Shady';

function makeWord(fName, lName) {
  var wholeName = `${fName} ${lName}`;
  var sent = 'Hello, my name is ' + wholeName;
  var wholeShebang = `${sent} ${wholeName}`;
  return wholeShebang;
}

console.log(makeWord(firstName, lastName));



// Return an array
function addNumbers(num1, num2){
    var sum = num1 + num2;
    var wordString = 'The sum of ' + num1 + ' and ' + num2 + ' is ' + sum;
    var newArray = [wordString,sum];
    return newArray;
}

console.log(addNumbers(4,5)[0]); 
console.log(addNumbers(4,5)[1]);
console.log(addNumbers(4,5));