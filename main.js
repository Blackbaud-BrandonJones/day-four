console.log("Hello from main.js");

//var is a keyword to create a new variable.
//variables are like buckets that can store / hold
//any value we give them.
var name = "Brandon"
console.log(name);


//PRIMITIVE TYPES
// String =  "Anything inside of          quotes";
console.log("Anything inside of          quotes");
var newString = "new Strings aren't hard";

console.log("Hello my name is " + name);
console.log("Hello" + " " + name + ".")

// Numbers are number
console.log(10);
console.log(-10);
console.log("10"); // this is a string.
console.log(10 + 20);
console.log(10 - 5);
console.log(10 / 2);
console.log(10 * 3);
//Respects PMDAS
var evaluation = (3 + 5) * 10 - 8;
console.log(evaluation);

var numberAndString =  "Hello" + 8;
var stringAndNumber = 8 + "Howdy";
var isNotNumber = 8 / "this string";

console.log(numberAndString);
console.log(stringAndNumber);
console.log(isNotNumber);

var math = 8 + 10;
var minusThis = 4;

console.log(math - minusThis);
minusThis = 10;
console.log(math - minusThis);
minusThis = "Words"
console.log(math + minusThis);

//Boolean   true  false.
var numEight = 8;
var strEight = 8;

var isTrue = numEight === strEight;
var isFalse = 8 === "10";
console.log(isTrue);
console.log(isFalse);

//Undefined
var myUndefinedVar;
console.log(myUndefinedVar);

//Null
var isTrue = null;
console.log(isTrue);

// === is strict equals.  types and values need to be
// the same;
// == is loosely equals.  more dangerous to use because
// javascript tries to interpolate your type.
// eg  8 == "8" is true.
if (8 === "8") {
  console.log("This was true");
} else {
  console.log("This was false");
}
console.log("ended of if else");

var notDefined = true;

if (notDefined) {
  console.log("this was true first");
} else if (7 === "7") {
  console.log("This second statement was true");
} else {
  console.log("Everything was false, just give up");
}

var answerOne = prompt('Do you wish to continue? yes or no');

if (answerOne === 'yes') {
  console.log("You are now continuing");
} else if (answerOne === 'no') {
  console.log("you quit!");
} else {
  console.log("I didn't understand that answer");
}

var thisDate = 2016;
var age = 14;

if (thisDate - age > 2000) {
  console.log("you're only 16 or less");
} else {
  console.log("you were at least born before the millenium");
}

//Capital letters matter.
var isCaps = "string";
var iscaps =  7;
console.log (iscaps, " ", isCaps);

// > greater than
var isBoolean = 10 < 20;
console.log(isBoolean + " <- should be true");
isBoolean = 20 < 20;
console.log(isBoolean + " <- should be false");
isBoolean = 20 <= 20;
console.log(isBoolean + " <- should be true");
isBoolean = 20 >= 20;
console.log(isBoolean + " <- should be true");

// && both sides need to be true
// || one side needs to be true
if (8 === 8 && 7 === "7") {
  console.log("both of these were true first time");
} else if ( 8 === 8 || 7 === "7") {
  console.log("One of these was true");
} else {
  console.log("none of these were true");
}
