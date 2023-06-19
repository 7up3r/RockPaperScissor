//In this script rock = 0, paper = 1, scissor = 2
//This is to determine the winner easily.

//getComputerChoice() returns value 0, 1 or 2
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    return choice;
}

//getUserChoice() asks user for input and return value 0, 1 or 2 by checking the value of user input
function getUserChoice() {
    let choice = prompt("Enter Your Choice:")
    if (choice.toLowerCase() === "rock") {
        return 0;
    } else if (choice.toLowerCase() === "paper") {
        return 1;
    } else if (choice.toLowerCase() == "scissor") {
        return 2;
    } else {
        console.log("Invalid Choice. Please choose between Rock, Paper or Scissor");
        getUserChoice();
    }
}

//getChoice() return the value in text from 0, 1 or 2
function getChoice(choice) {
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else if (choice == 2) {
        return "Scissor";
    } else {
        return "Some Error has Occured";
    }
}
//playRound() return the result of the game
function playRound(userChoice, computerChoice) {
    let winner = (3 + userChoice - computerChoice) % 3;
    switch(winner) {
        case 0: return "This game is a tie. "+ getChoice(computerChoice) +" ties with "+ getChoice(userChoice);
                break;
        case 1: return "Player Wins. "+ getChoice(userChoice) +" beats "+ getChoice(computerChoice);
                break;
        case 2: return "Computer Wins. "+ getChoice(computerChoice) +" beats "+ getChoice(userChoice);
                break;
        default: return "Some error has occured.";
    }
}

function game() {
    let score = 0;
    let userChoice = 0;
    let computerChoice = 0;
    while(score < 5) {
        userChoice = getUserChoice();
        computerChoice = getComputerChoice();
        console.log(playRound(userChoice, computerChoice)," Round:",score+1);
        score++;
    }   
    return "Played 5 round";
 }
 
 console.log(game());