// FUNCTIONS //

// METHODS - BUILT IN FUNCTIONS

/////   after declaring and returning the function you need to call the function in the console.log or else the function will be inactive     //////

// function sum() {
//     return(2+5)
// }
// console.log(sum());


// function sum(NUM1, NUM2) {
//     if (NUM2 === undefined){
//         return(NUM1 +NUM1);
//     }
//     return(NUM1+NUM2);
// }
// console.log(sum(52));


// function getUserNameFromEmail(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("abhignan.papani@gmail.com"));




// const getUserNameFromEmail = function(email){
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("abhignanpapani@gmail.com"));




///////      ARROW FUNCTION      ????????

// const getUserNameFromEmail = (email) => {
//     return email.slice(0,email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("abhinetha1909@gmail.com"));


/////  If you dont provide a name for a function then it is known as a annonymus function ////////
/////   We can provide reusable code with the functions   ////


// example //

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}
console.log(toProperCase("aBhiGnaaN"))


// the above used function is an reusable code and you can use it wherever you want to use //











