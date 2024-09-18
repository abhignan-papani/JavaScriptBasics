///   SCOPE  ///
/// Let , Const , Var*(legacy old code version)


// var x = 1; // will run without any error 
//  x= 3;
// console.log(x);

// let x = 1; // will run without any error
//  x = 2;
// console.log(x); 

// const x = 1;  // shows  an error by saying assignment to constant error - you cannot change the value if you assign it to the Const scope //
// x = 2;
// console.log(x);



/// There are 2 types of scope /////
/////    1 . GLOBAL SCOPE     2. LOCAL SCOPE { a) function scope  b) block scope }   ////////////

//// hirearchy -  Global scope > function scope > block scope //////
/// Global function is available to all, it can go in functions and beyond that it can go into functions which are nested inside a function. it can go into blocks of code that are in a function ////

//// BLOCKS OF CODE - IS NOT ONLY ANYTHING IN SIDE { } BUT ALSO IF{}, FOR() {} , SWITCH{} etc and many more which can be named as a block of code. ////

//// So the code values of the variable will passed down global into functions, functions into other functions or blocks of code, but not passsed up. 



var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFun() {
    var y = 10;
    const z = 10;

    {
         // var is a function scope and not a block scope. if we use var in block scope. var value in block scope will be available to the function var and outputs the block scope var value in the console if the function scope reads the block scope first ////
        var y = 5;
        const z = 11;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

}
myFun();

// var a=5;
// var a= 2;
// console.log(a); // output- a