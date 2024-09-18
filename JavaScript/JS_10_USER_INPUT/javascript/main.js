// User Input

// alert("hello world");

// let myVariable = confirm("ok=== true\n cancel=== false\n");
// console.log(myVariable);

// '??' - if it has a value then print the value which is assigned to it. if it doesnt then print the value which is next to it

// ex:

// let name = prompt(" please enter your name");
// console.log(name ?? "you didn't entered your name");


let name = prompt(" please enter your name");
if (name){
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("you did'nt enter your name");
}


// so there are three user input properties 
// 1. alert  2. confirm   3. prompt