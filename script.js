/*
Generate random number from 0-2
Return Rock if number is 0
Return Paper if number is 1
Return Scissors if number is 2
*/
function getComputerChoice()
{
    randomNatural = Math.floor(Math.random() * 3);
    return  (randomNatural === 0) ? "Rock" :
            (randomNatural === 1) ? "Paper" : "Scissors";
}

/*
Takes in player's selection X and computer selection Y
Compare selections case insensitively
If player wins: return "You win! X beats Y"
If player loses: return "You lose! Y beats X"
If same selection: return "Both of you have chosen X!"
*/

function playRound(player, computer)
{
    player =  player[0].toUpperCase() + player.substr(1).toLowerCase();
    computer = computer[0].toUpperCase() + computer.substr(1).toLowerCase();
    if (player === computer)
    {
        return `You both chose ${player}! No one wins!`;
    }
    if (player === "Rock")
    {
        return isWinner(player, computer, "Scissors");
    }
    if (player === "Paper")
    {
        return isWinner(player, computer, "Rock");
    }
    if (player === "Scissors")
    {
        return isWinner(player, computer, "Paper");
    }
}

/* Given the player's and computer's selection and the selection 
for the player to win, return the result of the round, given that
a tie is not possible */
function isWinner(player, computer, playerWinOption)
{
    return (`You chose "${player}" and the computer chose "${computer}". ` + 
            ((computer === playerWinOption) ?
            "You win!" :
            "You lose!"));
}


console.log(playRound("rOCK", getComputerChoice()));