// CONDITIONALS : TERENARY OPERATORS

// SYNTAX :

// if (conditon) ? ifTrue-print this (:else) ifFalse-print this;
// if(condition) ? TRUE(print this) : FALSE(print this);

// Example - 1:

// let soup = "chicken soup" ;
// let order = soup ? `here is your ${soup}` : `sorry, no soup today`;
// console.log(order);


//Example - 2:

// let IsCustomerIsBanned = false;
// let soup = "chicken soup";
// let order= IsCustomerIsBanned ? `sorry you are not allowed.` : soup ? `here is your ${soup}` : `sorry, we are out of stock.`;
// console.log(order);


// Example - 3:

// let grade= 69;
// let myGrade = grade > 89 ? "A"
// : grade > 79 ? "B" 
// : grade > 69 ? "C" 
// : grade > 59 ? "D"
// : "F";
// console.log(`my grade is ${myGrade}`);



// Example - 4:

// let player ="scissor";
// let computer = "rock";
// let game = player===computer ? `Tie game` 
// : player === "rock" && computer === "paper" ? `computer wins.`
// : player === "paper" && computer === "scissor" ? `computer wins.`
// : player === "scissor" && computer === "rock" ? `computer wins.`
// : `player wins.`
// console.log(game);




// Ex- 5

// let grade = 89;
// let collageStudent = false;
// let myGrade = collageStudent ? "P"
// :grade >= 89 ? "A"
// : grade >= 79 ? "B"
// : grade >= 69 ? "c"
// : "F";
// console.log(myGrade);


let player = "rock";
let computer = "paper";
let game = player===computer ? "tie game"
: player === "rock" && computer === "paper" ? "computer wins"
: player === "paper" && computer === "scissor" ? "computer wins"
: player === "scissor" && computer === "rock" ? "computer wins"
: "player wins";
console.log(game);















