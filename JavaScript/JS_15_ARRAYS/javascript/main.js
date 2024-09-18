/// ARRAYS ////
// arrays are data structures in JavaScript //
// by default array provides length in the console 


const myArray = [];
myArray[0] = "abhi";
myArray[1] = 101;
myArray[2] = false;

// to refer an array 
console.log(myArray);

// length property
console.log(myArray.length);

// last element in array
console.log(myArray[myArray.length-1]);
console.log(myArray[1]);

// to add a variable only at the end of an array //// " .push()  "  ///
myArray.push("goals")
console.log(myArray);

// to remove a variable which is added to an array  //// " .pop() "   ///
myArray.pop()
console.log(myArray);

// to add a variable at only at the begining of the array  // " .unshift()" ///
myArray.unshift(50)
console.log(myArray);

// to remove a added variable to an array from the beginning of the array  //  " .shift() "
myArray.shift()
console.log(myArray);

// if anything is removed from an array the position of the rest elements in the array shifts to the front 


// to delete an array we can use this but it is not recommended 
// " delete myArray[]; "  //

// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

// to remove any variable in between of the array we use " .splice " method by 
// .splice(_,_)   ->   (the position where you want to splice, how may variables you want to remove) 
//or 
//if you dont want to remove but to add variable to an array then
// .splice(_,0,_)   ->   (the position where you want to splice, 0(because you dont want to remove anything from the array), then the variables you want to add.

// myArray.splice(1,2);
myArray.splice(1,0,45,50);
console.log(myArray);

// Slice method - it includes the given starting point of the slice but wont includes the end point. 

// const myVariable = ["a", "b", "c", "d", "e"];
// console.log(myVariable.slice(2));

//or

const myVariable = ["a", "b", "c", "d", "e"];
const myNewVariable = myVariable.slice(2);
console.log(myNewVariable);
console.log(myVariable.slice(2,4));
console.log(myVariable);

/// if you want the given array in the reverse 
/// " .reverse()  "

myVariable.reverse();
console.log(myVariable);


/// Join  and Split method- 

const myArrays = ["A","B","C","D","E","F"];
const newArrays = myArrays.join();
console.log(newArrays);

const newMyArray = newArrays.split(",");
console.log(newMyArray);


///// Concat  /////
// joins two arrays, given what array comes first and second
const myArrayA = ["A","B","C"];
const myArrayB = ["D","E","F"];
myArrayAB = myArrayA.concat(myArrayB);
console.log(myArrayAB);

 
/// Spread  ///  ' [...variable,...variable]; '
// works similar to concat  ///

const myArrayABC = [...myArrayA,...myArrayB];
console.log(myArrayABC);


///// 1/2/3 dimensional arrays and you can nest as many arrays inside a single array

const myFruitsA = ["apple", "banana", "mango"];
const myFruitsB = ["pine apple", "water melon", "grapes"];

const myVeggiesA = ["tomato", "potato", "beetroot"];
const myVeggiesB = ["onion", "carrot" , "turmeric"];

console.log(myFruitsA[0]);
console.log(myFruitsB[1]);
console.log(myVeggiesA[1]);
console.log(myVeggiesB[2]);

const myFruits = [myFruitsA, myFruitsB];
const myVeggies = [myVeggiesA, myVeggiesB];

console.log(myFruits[0][0]);
console.log(myFruits[1][1]);
console.log(myVeggies[0][1]);
console.log(myVeggies[1][2]);

const myFood = [myFruits, myVeggies];

console.log(myFood[0][0][0]);
console.log(myFood[0][1][1]);
console.log(myFood[1][0][1]);
console.log(myFood[1][1][2]);










































