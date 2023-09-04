let output = document.getElementById("output")
let yourChoice;
let yourScore = 0;
let computerChoice;
let computerScore = 0;

let choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    yourChoice = this.id;
    document.getElementById("your-choice").src = yourChoice + ".png";

    computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("computer-choice").src = computerChoice + ".png";

    // check for winner
    if (yourChoice === computerChoice) {
        yourScore += 0;
        computerScore += 0;
    }
    else if (yourChoice == "rock" && computerChoice == "scissors") {
        yourScore += 1;
    }
    else if (yourChoice == "rock" && computerChoice == "paper") {
        computerScore += 1;
    }
    else if (yourChoice == "scissors" && computerChoice == "paper") {
        yourScore += 1;
    }
    else if (yourChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1;
    }
    else if (yourChoice == "paper" && computerChoice == "rock") {
        yourScore += 1;
    }
    else if (yourChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1;
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("computer-score").innerText = computerScore;

    game();
    restartGame();
}


function game() {
        if (yourScore == 5) {
            output.innerText = "You Won the Game! Congrats";
        }
        else if (computerScore == 5){
            output.innerText = "You Lost the game! Better luck next time.";
        }

        setTimeout(function(){
            output.innerText = '';
        }, 4000);
    }

function restartGame() {
    if(yourScore == 5 || computerScore == 5) {
    yourScore = 0
    computerScore = 0
  }
}