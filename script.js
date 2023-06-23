//In this script rock = 0, paper = 1, scissor = 2
//This is to determine the winner easily.
    let userScore= 0;
    let computerScore = 0;
    let userChoice = 0;
    let computerChoice = 0;
    let round = 1;
    //getComputerChoice() returns value 0, 1 or 2
    function getComputerChoice() {
        let choice = Math.floor(Math.random()*3);
        return choice;
    }

    //getUserChoice() asks user for input and return value 0, 1 or 2 by checking the value of user input
    const buttonRock = document.querySelector('#rock');
    buttonRock.addEventListener('click', () => game(0));
    const buttonPaper = document.querySelector('#paper');
    buttonPaper.addEventListener('click', () => game(1));
    const buttonScissor = document.querySelector('#scissor');
    buttonScissor.addEventListener('click', () => game(2));

    //getChoice() return the value in text from 0, 1 or 2
    function getChoice(choice) {
        if(choice == 0) {
            return "Rock";
        } else if(choice == 1) {
            return "Paper";
        } else if(choice == 2) {
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
            case 1: userScore++;
                    return "Player Wins. "+ getChoice(userChoice) +" beats "+ getChoice(computerChoice);
                    break;
            case 2: computerScore++;
                    return "Computer Wins. "+ getChoice(computerChoice) +" beats "+ getChoice(userChoice);
                    break;
            default: return "Some error has occured.";
        }
    }

    const gameResult = document.querySelector('#gameResult');
    const totalRounds = document.querySelector('#totalRounds');
    const score = document.querySelector('#score');

    function game(userChoice) {
        computerChoice = getComputerChoice();
        gameResult.innerHTML = playRound(userChoice, computerChoice);
        totalRounds.innerHTML = "Total Round Played: " + round++;
        score.innerHTML = "User has won " + userScore + " vs Computer has won " + computerScore;
        if(checkWinner(userScore, computerScore)) {
            resetValues();
        };
    }
    
    function checkWinner(userScore, computerScore) {
        if(userScore == 5) {
            gameResult.innerHTML = `Game has ended! USER WINS <br> User defeats Computer with ${userScore} - ${computerScore} score`;
            score.innerHTML = ` `;
            return true;    
        }
        if( computerScore == 5) {
            gameResult.innerHTML = `Ah Crap! DEFEAT!!! <br> Computer defeats User with ${computerScore} - ${userScore} score`;
            score.innerHTML = ` `;
            return true;
        }
        return false;
    }

    function resetValues() {
        userScore= 0;
        computerScore = 0;
        userChoice = 0;
        computerChoice = 0;
        round = 1;
    }

    function highestScore (a, b) {
        if(a > b) {
            return a;
        }
        else {
            return b;
        }
    }
