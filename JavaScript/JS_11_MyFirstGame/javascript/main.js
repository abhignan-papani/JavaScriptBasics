// // my first game

let playGame = confirm("let's play rock, paper and scissors?");
if (playGame){
    let playerChoice = prompt(" please select rock, paper or scissors");
    if (playerChoice){
        let player = playerChoice.trim().toLowerCase();
        if (
            player === "rock" || 
            player === "paper" || 
            player === "scissors"
        ) {
            let computerChoice = Math.floor(Math.random()*3+1);
            let computer = 
                computerChoice === 1 ? "rock"
                : computerChoice === 2 ? "paper"
                : "scissors"
            
            // LOGIC 
                let result =
            player === computer
            ? "tie game"
            : player === "rock" && computer === "paper" 
            ? `player: ${player} \n computer: ${computer}\ncomputer wins!`
            : player === "paper" && computer === "scissors" 
            ? `player: ${player} \n computer: ${computer}\ncomputer wins!`
            : player === "scissors" && computer === "rock" 
            ? `player: ${player} \n computer: ${computer}\ncomputer wins!`
            : `player: ${player} \n computer: ${computer}\nplayerOne wins!`
            alert(result);
            // LOGIC


            let playAgain = confirm("playAgain?");
            playAgain ? location.reload() : alert("OK. Thank you for playing.")
        }else {
            alert(" you did not enter rock, paper and scissors");
        } 
    }else 
        alert("seems you changed your mind. see you next time");

} else {
        alert("alright.let's play next time");
}
   


// let playGame = confirm("lets play rock paper scissors?");
// if (playGame){
//     let playerChoice = prompt("please select rock, paper or scissors");
//     if(playerChoice){
//         let player = playerChoice.trim().toLowerCase();
//         if(
//             player === "rock" || 
//             player === "paper" || 
//             player === "scissors"
//         ) {
//             let computerChoice = Math.floor(Math.random()*3+1);
//             let computer = 
//             computerChoice === 1? "rock"
//             : computerChoice === 2? "paper" 
//             : "scissors"
            
//             let result = 
//             player === computer ? "tie game" 
//             :  player === "rock" & computer === "paper"?
//             alert(`player : ${player}\n computer : ${computer}\n computer wins!`)
//             :  player === "paper" & computer === "scissors"?
//             alert(`player : ${player}\n computer : ${computer}\n computer wins!`)
//             :  player === "scissors" & computer === "rock"?
//             alert(`player : ${player}\n computer : ${computer}\n computer wins!`)
//             : alert(`player : ${player}\n computer : ${computer}\n player wins!`);

//             alert(result);

//             let playAgain = confirm("playagain?");
//             playAgain ? location.reload() : alert("it's nice playing to you");
//         }
//         else {
//             alert("you did not enter rock paper scissors");
//         }
//     } else{ 
//         alert("seems you changed your mind, let's play next time");
//     }

// } else {
//     alert("alright! lets play later");
// }
