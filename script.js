/*
Generate random number from 0-2
return Rock if number is 0
return Paper if number is 1
return Scissors if number is 2
*/
function getComputerChoice()
{
    randomNatural = Math.floor(Math.random() * 3);
    return  (randomNatural === 0) ? "Rock" :
            (randomNatural === 1) ? "Paper" : "Scissors";
}