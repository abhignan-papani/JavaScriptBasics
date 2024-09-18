// Numbers
const myNumber = 45; // Numbers will showcase in purple color
const myFloat = 45.05;
const myString = "45"; //string will showcase in white color

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myString);

// console.log(Number(myString)); - changes the given string into number.

console.log(Number(myString));
console.log(Number(myString)+5);
console.log(Number(myString) === myNumber);

console.log(myString + myNumber);
console.log(myString + myNumber + myFloat);
console.log(Number(myString) + myNumber + myFloat);

console.log(Number("abhi")); // NaN - Not A Number.
console.log(Number(undefined)); // NaN
console.log(Number(true));  // 1
console.log(Number(false));  // 0

// Number Methods 

//the " Number.isInteger() " method determines whether the given value is integer or not.

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myString));


// the " Number.parseFloat() " method parses an argument and returns a floating point number. if a number cannot be parsed from an argument, then it returns "Nan" .

console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myString));

console.log(Number.parseFloat("5.356abhi23"));
console.log(Number.parseFloat("abhi"));

//  the " Number.parseInt() " method parses an argument and returns a Integer number. if a number cannot be parsed from an argument, then it returns "Nan" .

console.log(Number.parseInt(myNumber));
console.log(Number.parseInt(myFloat));
console.log(Number.parseInt(myString));
console.log(Number.parseInt("abhi"));

// The " toFixed() " method formats a number according to how many decimal points you provide as a parameter.

console.log( myFloat.toFixed(1));
console.log( 45.6362.toFixed(2));
console.log( myNumber.toFixed(1));
console.log( Number(myString).toFixed(2));
 
//The " toString()" method returns a string representing a number.

console.log(myFloat.toString());
console.log(myString.toString());
console.log(myNumber.toString());
console.log("234".toString());

// Chaining - Using several methods chained together.

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());


//NaN ia a acronym for NOt A Number 

// " Number.isNaN() " method determines whether the passed value is NaN & it's type is Number

console.log(Number.isNaN("a"));

// Global isNaN method determines whether a value is NaN or not.

console.log(isNaN("abhi"));



 

