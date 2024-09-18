// javaScript Errors and Error Handling 
// syntax error will completely stop your code from executing but whereas all other errors like reference errors.. can be caught in the code when it is executing //
// syntax error, type error, reference error etc

//we use "use strict" to get rid of any unassigned variables


// TRY // CATCH // FINALLY 
//  We use above three methods to catch errors. 


// "use strict"
// const abhi = "name";
// console.log(abhi);




// EX- 1 // catching error using try and catch //

// const myName = () => {
//     try{
//         const name = "abhi";
//         name = "chinnu";
//         name = "chinu"
//     } catch (err){
//         console.log(err);
//         console.error(err);
//         console.warn(err);
//         console.table(err);
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err.stack);
//         // logTheError(err.stack);
//     }
// }
// myName();

// EX :2 // creating an own custom error by using functions//
 
// const customError() 

// "use strict"
// const myError = () => {    
//     try {
//         throw new customError("this is a custom error");
//     } catch (err){
//         console.error(err.stack);
//         console.error(err.name);
//         console.error(err.message);
//         console.error(err);
//     }
// };
// myError();

// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name} : ${this.message}`;
// }


//ex: 3 // built in error by MDN

// "use strict"
// const myError = () => {    
//     try {
//         throw new Error("this is a error");
//     } catch (err){
//         console.error(err.stack);
//         console.error(err.name);
//         console.error(err.message);
//     }
// };
// myError();


// ex :4// gives you error upon the given conditions by using try, catch and finally 

"use strict"
const myError = () => { 
    let i=1;   
    while(i <= 5){
        try {
        if (i % 2 !==0){
            throw new Error("odd number");
        }
        console.log("even number");
    }
        catch (err){
        console.error(err.stack);       
    } finally {
        console.log("...finally");
        i++;
}
}
}
myError();