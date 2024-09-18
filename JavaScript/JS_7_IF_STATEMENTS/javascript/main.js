// Conditionals - IF statements

// SYNTAX 

// if (condition){
//         // run this code
// } else {
//         // run this code
// }


// EXAMPLE 1 // 

//( you have to visualize logically what step comes first and what comes next whenever you use if statements else all the code might go wrong and you'll face errors just because of the wrong logic)//


// let customerIsBanned = false;
// let soup = "chicken soup";
// let reply;
// let crackers = true;

// if (customerIsBanned) {
//     reply = `you are not allowed!;`
// }else if (soup && crackers) {
//     reply = `here is your ${soup} and crackers.`;
// }else if (soup) {
//     reply = `here is your ${soup}`;
// }else {
//     reply = `sorry! we are out of soups`;
// }
// console.log(reply); 



//EXAMPLE 2 // using if and else statements inside a else statement


// let testScore = 70;
// let grade;
// let collageStudent = true;

// if(testScore >= 90){
//     grade = "A"
// }else if(testScore >= 80) {
//     grade= " B"
// }else if(testScore >= 70){
//     grade= "c"
// }else if(testScore >= 60){
//     grade= "D"

//     // Nested IF statement - we can use if and else in an else statement which can be said nested if statement. 

// } else {
//     if(collageStudent){
//         grade= "P"
//     }else {
//         grade= "F"
//     }
// }
// console.log(grade);




//EXAMPLE - 3 

// Rock , paper , scissors GAME 

let player = "scissor";
let computer = "paper";
let game ;


if(player === computer){
   game = "Tie Game.";
} else if ( player === "rock"){
    if(computer === "paper"){
        game = "computer wins";
    } else {
        game = "player wins";
    }
} else if ( player === "paper"){
    if(computer === "scissor"){
        game = " computer wins";
    } else {
        game = "player wins";
    }
} else {
    if(computer === "rock"){
        game = " player wins";
    } else {
        game = "computer wins";
    }  
}
console.log(game);



// let player =  "rock";
// let computer = "paper";

// if (player === computer)
//     console.log("Tie Game");
//     else if (player === "rock"){
//         if(computer === "paper"){
//     console.log("computer wins");
//         } else 
//     console.log("player wins");
// }
// else if (player === "paper"){
//     if(computer === "scissor"){
//         console.log("computer wins");
//     } else 
//     console.log("player wins");
// }
// else if (player === "scissor"){
//     if(computer === "rock"){
//         console.log("computer wins");
//     } else 
//     console.log("player wins");
// }
// else 
//     console.log("Failed");
  