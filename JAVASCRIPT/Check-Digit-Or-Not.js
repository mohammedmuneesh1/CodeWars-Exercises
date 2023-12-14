//    QUESTION

//should return true if given object is a digit (0-9), false otherwise.

//ANSWER

const num = (number)=> /^[0-9]$/.test(number);

console.log(num("9"));
console.log(num("5"));
console.log(num("a5"));

//NOTES

//  ^ used for that the value should start with the digit
//  $ indicate end of the line . indicate end should be digit
