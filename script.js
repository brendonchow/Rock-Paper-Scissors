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
    if (player === computer)
    {
        return 0;
    }
    if (player === "Rock")
    {
        return (computer === "Scissors") ? 1 : -1;
    }
    if (player === "Paper")
    {
        return (computer === "Rock") ? 1 : -1;
    }
    return (computer === "Paper") ? 1 : -1;
}

/* Player and computer play a round of 5
Print the result of each round and determine the ultimate winner*/
function game()
{
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    for (let i = 1; i <= 5; i++)
    {
        let capitalize = (s) => s[0].toUpperCase() + s.substr(1).toLowerCase();
        let player = capitalize(prompt("Enter 'Rock', 'Paper' or 'Scissors'."));
        let computer = getComputerChoice();
        let result = playRound(player,  computer);

        let outputResult;
        if (result === 0)
        {
            outputResult = "Tie game!";
            ties++;
        }
        else if (result === 1)
        {
            outputResult = "You win!";
            playerWins++;
        }
        else
        {
            outputResult = "You lose!";
            computerWins++;
        }
        console.log(`Round ${i}: ${outputResult} You chose "${player}" and the computer chose "${computer}". `);
    }

    let result =(playerWins > computerWins) ? "You are the final winner. Congratulations!" :
                (playerWins < computerWins) ? "The computer is the final winner. Better luck next time!" :
                "It's a tie!";
    console.log(`You won ${playerWins} times, the computer won ${computerWins} times and there were ${ties} ties! ${result}`);
}

game();