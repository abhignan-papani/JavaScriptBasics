// // my first game

// let playGame = confirm("let's play rock, paper and scissors?");
// if (playGame){
//     let playerChoice = prompt(" please select rock, paper or scissors");
//     if (playerChoice){
//         let playerOne = playerChoice.trim().toLowerCase();
//         if (
//             playerOne === "rock" || 
//             playerOne === "paper" || 
//             playerOne === "scissors"
//         ) {
//             let computerChoice = Math.floor(Math.random()*3+1);
//             let computer = 
//                 computerChoice === 1 ? "rock"
//                 : computerChoice === 2 ? "paper"
//                 : "scissors"
            
//             // LOGIC 
//                 let result =
//             playerOne === computer
//             ? "tie game"
//             : playerOne === "rock" && computer === "paper" 
//             ? `playerOne: ${playerOne} \n computer: ${computer}\ncomputer wins!`
//             : playerOne === "paper" && computer === "scissors" 
//             ? `playerOne: ${playerOne} \n computer: ${computer}\ncomputer wins!`
//             : playerOne === "scissors" && computer === "rock" 
//             ? `playerOne: ${playerOne} \n computer: ${computer}\ncomputer wins!`
//             : `playerOne: ${playerOne} \n computer: ${computer}\nplayerOne wins!`
//             alert(result);
//             // LOGIC


//             let playAgain = confirm("playAgain?");
//             playAgain ? location.reload() : alert("OK. Thank you for playing.")
//         }else {
//             alert(" you did not enter rock, paper and scissors");
//         } 
//     }else 
//         alert("seems you changed your mind. see you next time");

// } else {
//         alert("alright.let's play next time");
// }
    


let playGame = confirm("lets play rock, paper and scissors?");
while(playGame){
    const playerChoice = prompt(" please enter rock, paper and scissors");
    if(playerChoice){
        
    }

} else {
    alert("alright! lets play later");
}








// / REFACTORING THE GAME USING THE ARRAYS  ///





let playGame = confirm("let's play rock, paper and scissors?");
if (playGame){

    while(playGame){
        const playerChoice = prompt(" please enter rock, paper or scissors");
        if(playerChoice || playerChoice === ""){
            const playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissors") {
                const  computerChoice = Math.floor(Math.random()*3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];

                const result =
                playerOne === computer 
                ? "Tie game"
                : playerOne === "rock" && computer === "paper"
                ? ` playerone : ${playerOne} \n computer : ${computer} \n computer wins!`
                : playerOne === "paper" && computer === "scissors"
                ? ` playerone : ${playerOne}\n computer : ${computer} \n computer wins!`
                : playerOne === "scissors" && computer === "rock"
                ? ` playerone : ${playerOne}\n computer : ${computer} \n computer wins!`
                :` playerone : ${playerOne} \n computer : ${computer}\n playerone wins!`;
                alert(result);
            
                playGame = confirm("play again?");
                if (!playGame) alert("see you next time.");
                continue ;

            } else {
                alert("you did not enter rock, paper or scissors.");
                    continue;
            }

        } else{
            alert("seems you changed your mind. see you next time.");
            break;
        }

    }

}else {
    alert("alright! see you some other time.");
}





// // refactoring the game using functions


// const initGame = () => {
//     const startGame = confirm("let's play rock, paper, scissors? ");
//     startGame ? playGame() : alert("alright! see you next time");
// };

// // Game flow function //

// const playGame = () => {
//     while(true){
//         let playerChoice = getPlayerChoice();
//         playerChoice = formatPlayerchoice(playerChoice);
//         if (playerChoice === "") {
//             invalidChoice();
//             continue;
//         }
//         if (!playerChoice){
//             decidedNotToPlay();
//             break;
//         }
//         playerChoice = evaluatePlayerChoice(playerChoice);
//         if(!playerChoice){
//             invalidChoice();
//             continue;
//         }
//         const computerChoice = getComputerChoice();
//         const result = determineWinner(playerChoice, computerChoice);
//         displayResult(result);
//         if (askToPlayAgain()){
//             continue;
//         } else {
//             thanksForPlaying();
//             break;
//         }
//     }
// };

// const getPlayerChoice = () => {
//     return prompt("please enter rock, paper or scissors.");
// };

// const formatPlayerchoice = (playerChoice) => {
//     if(playerChoice || playerChoice === "") {
//       return playerChoice.trim().toLowerCase();
//     } else {
//       return false;
//     }
// };

// const decidedNotToPlay = () => {
//     alert(" Seems you changes your mind! let play some other day.");
// };


// const evaluatePlayerChoice = (playerChoice) => {
//     if(
//         playerChoice === "rock" || 
//         playerChoice === "paper" || 
//         playerChoice === "scissors"
//     ) {
//         return evaluatePlayerChoice()
//     } else {
//         return false;
//     }
// };

// const invalidChoice = () => {
//     alert("you didn't enter rock, paper, scissors.");
// };

// const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random()*3);
//     const rpsArray = ["rock", "paper","scissors"];
//     return rpsArray[randomNumber];
// };

// const determineWinner = (player, computer) => {
//     const winner = 
//     player === computer ?
//     "tie game"
//     : playerChoice === "rock" && computerChoice === "paper" 
//     ? `playerone: ${player}\n computer: ${computer}\n computer wins!`
//     : playerChoice === "paper" && computerChoice === "scissors" 
//     ? `playerone: ${player}\n computer: ${computer}\n computer wins!`
//     : playerChoice === "scissors" && computerChoice === "rock" 
//     ? `playerone: ${player}\n computer: ${computer}\n computer wins!`
//     : `playerone: ${player}\n computer: ${computer}\n player wins!`;

// return winner;
// };

// const displayResult = (result) => {
//     alert(result);
// };

// const askToPlayAgain = () => {
//     return confirm("play again?");
// };

// const thanksForPlaying =() => {
//     alert("Thanks for playing.");
// };

// initGame();




// // main code with functions from dave git

// const initGame = () => {
//     const startGame = confirm("Shall we play rock, paper, or scissors?");
//     startGame ? playGame() : alert("Ok, maybe next time.");
//   };
  
//   // Game flow function
//   const playGame = () => {
//     while (true) {
//       let playerChoice = getPlayerChoice();
//       playerChoice = formatPlayerChoice(playerChoice);
//       if (playerChoice === "") {
//         invalidChoice();
//         continue;
//       }
//       if (!playerChoice) {
//         decidedNotToPlay();
//         break;
//       }
//       playerChoice = evaluatePlayerChoice(playerChoice);
//       if (!playerChoice) {
//         invalidChoice();
//         continue;
//       }
//       const computerChoice = getComputerChoice();
//       const result = determineWinner(playerChoice, computerChoice);
//       displayResult(result);
//       if (askToPlayAgain()) {
//         continue;
//       } else {
//         thanksForPlaying();
//         break;
//       }
//     }
//   };
  
//   const getPlayerChoice = () => {
//     return prompt("Please enter rock, paper, or scissors.");
//   };
  
//   const formatPlayerChoice = (playerChoice) => {
//     if (playerChoice || playerChoice === "") {
//       return playerChoice.trim().toLowerCase();
//     } else {
//       return false;
//     }
//   };
  
//   const decidedNotToPlay = () => {
//     alert("I guess you changed your mind. Maybe next time.");
//   };
  
//   const evaluatePlayerChoice = (playerChoice) => {
//     if (
//       playerChoice === "rock" ||
//       playerChoice === "paper" ||
//       playerChoice === "scissors"
//     ) {
//       return playerChoice;
//     } else {
//       return false;
//     }
//   };
  
//   const invalidChoice = () => {
//     alert("You didn't enter rock, paper, or scissors.");
//   };
  
//   const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 3);
//     const rpsArray = ["rock", "paper", "scissors"];
//     return rpsArray[randomNumber];
//   };
  
//   const determineWinner = (player, computer) => {
//     const winner =
//       player === computer
//         ? "Tie game!"
//         : player === "rock" && computer === "paper"
//         ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//         : player === "paper" && computer === "scissors"
//         ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//         : player === "scissors" && computer === "rock"
//         ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!`
//         : `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`;
  
//     return winner;
//   };
  
//   const displayResult = (result) => {
//     alert(result);
//   };
  
//   const askToPlayAgain = () => {
//     return confirm("Play Again?");
//   };
  
//   const thanksForPlaying = () => {
//     alert("Ok, thanks for playing.");
//   };
  
//   initGame();
