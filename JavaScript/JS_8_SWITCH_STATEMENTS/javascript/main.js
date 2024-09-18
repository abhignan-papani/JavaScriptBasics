// CONDITIONALS : SWITCH STATEMENTS


// SYNTAX

// switch (Expression or value ) {

//     case choice 1:
//         // run this code
//         break;

//     case choice 2:
//         // run this code
//         break;

//     // add as many cases as needed

//     default:
//         // run this code if there is no matches
//         // no break needed here
// }

let player = "rock";
let computer = "rock";

switch(player){
    case computer:
        console.log(" Tie Game.");
    break;

    case "rock":
        if(computer === "paper"){
            console.log("computer wins.");
        } else {
            console.log("player wins.");
        }
        break;

    case "paper":
        if(computer === "scissor"){
            console.log("computer wins.");
        } else {
            console.log("player wins.");
        }
        break;

    default:
        if(computer === "rock"){
            console.log("computer wins.");
        } else {
            console.log("player wins.");
        }
}