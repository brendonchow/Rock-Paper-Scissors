const INITIAL_QUOTE = "Lets Play!";

const trackPlayer = document.querySelector(".playerScore");
const trackComputer = document.querySelector(".computerScore");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll(".buttons button");
const playButton = document.querySelector(".play");
const endGameMessage = document.querySelector(".endgameMessage");
const endGame = document.querySelector(".endgame")

message.textContent = INITIAL_QUOTE;

function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    return  choices[Math.floor(Math.random() * 3)];
}

function playRound(player, computer)
{
    if (trackPlayer.textContent == 5 || trackComputer.textContent == 5) return;
    if (player === computer) message.textContent = `Tie! You both chose ${player}!`;
    else if (player === "Rock") determineResult(player, computer, "Scissors");
    else if (player === "Paper") determineResult(player, computer, "Rock");
    else determineResult(player, computer, "Paper");
}

function determineResult(player, computer, playerWin)
{
    if (computer === playerWin) 
    {
        trackPlayer.textContent++;
        message.textContent = `You win! ${player} beats ${computer}!`;
    } 
    else 
    {
        trackComputer.textContent++;
        message.textContent = `You lose! ${computer} beats ${player}!`;
    }
    if (trackPlayer.textContent == 5 || trackComputer.textContent == 5)
    {
        if (trackPlayer.textContent == 5) endGameMessage.textContent = "Congratulations! You are the ultimate winner!";
        else endGameMessage.textContent = "The computer won! Better luck next time!";
        endGame.classList.toggle("clickPlay");

    }
}

playButton.addEventListener("mousedown", () => {
    trackComputer.textContent = 0;
    trackPlayer.textContent = 0;
    endGame.classList.toggle("clickPlay")
    message.textContent = INITIAL_QUOTE;
})

buttons.forEach(button => {
    button.addEventListener("click", e => {
        playRound(e.target.classList.value, getComputerChoice());
        console.log(e.target.classList.value)
    });
});
