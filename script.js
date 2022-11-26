function getComputerChoice()
{
    randomNatural = Math.floor(Math.random() * 3);
    return  (randomNatural === 0) ? "Rock" :
            (randomNatural === 1) ? "Paper" : "Scissors";
}

function isWinner(player, computer)
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
    if (player == "Scissors")
    {
        return (computer === "Paper") ? 1 : -1;
    }
}

function game()
{
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0;
    // Play 5 rounds
    for (let i = 1; i <= 5; i++)
    {
        let capitalize = (s) => s[0].toUpperCase() + s.substr(1).toLowerCase();
        let player = capitalize(prompt("Enter 'Rock', 'Paper' or 'Scissors'."));
        let computer = getComputerChoice();
        let result = isWinner(player,  computer);

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
        console.log(`Round ${i}: ${outputResult} You chose "${player}" and the computer chose "${computer}".`);
    }

    let result =(playerWins > computerWins) ? "You are the final winner. Congratulations!" :
                (playerWins < computerWins) ? "The computer is the final winner. Better luck next time!" :
                "It's a tie!";
    // Print results and stats on their own lines
    console.log(`${result}\nWins: ${playerWins}\nLoses: ${computerWins}\nTies: ${ties}`);
}

game();