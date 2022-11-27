const INITIAL_QUOTE = "Lets Play!";

const trackPlayer = document.querySelector(".playerScore");
const trackComputer = document.querySelector(".computerScore");
const message = document.querySelector(".message");
const buttons = document.querySelectorAll(".buttons button");
const playButton = document.querySelector(".play"); 

message.textContent = INITIAL_QUOTE;

playButton.addEventListener("mousedown", () => {
    trackComputer.textContent = 0;
    trackPlayer.textContent = 0;
    playButton.classList.toggle("clickPlay")
    message.textContent = INITIAL_QUOTE;
})

buttons.forEach(button => {
    button.addEventListener("click", e => {
        playRound(e.target.classList.value, getComputerChoice());
    });

});

message.addEventListener("transitionend", e => e.target.classList.remove("messageChange"));

window.addEventListener("keydown", (e) => {
    const player = document.querySelector(`.${e.key}`);
    if (!player) return;
    playRound(player.classList.value.slice(0, player.classList.value.length - 2), getComputerChoice());
    console.log(player.classList.value);
})

function getComputerChoice()
{
    let choices = ["Rock", "Paper", "Scissors"]
    return  choices[Math.floor(Math.random() * 3)];
}

function playRound(player, computer)
{
    if (trackPlayer.textContent == 5 || trackComputer.textContent == 5) return;
    message.classList.add("messageChange");
    if (player === computer) message.textContent = "Tie!";
    else if (player === "Rock") determineResult(computer, "Scissors");
    else if (player === "Paper") determineResult(computer, "Rock");
    else determineResult(computer, "Paper");
}

function determineResult(computer, playerWin)
{
    if (computer === playerWin) 
    {
        trackPlayer.textContent++;
        message.textContent = "Player + 1"
    } 
    else 
    {
        trackComputer.textContent++;
        message.textContent = "Computer + 1"
    }
    if (trackPlayer.textContent == 5 || trackComputer.textContent == 5)
    {
        if (trackPlayer.textContent == 5) message.textContent = "Player Wins!";
        else message.textContent = "Computer Wins!";
        playButton.classList.toggle("clickPlay");

    }
}