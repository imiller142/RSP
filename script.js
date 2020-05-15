document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;




function playRound() {

    var userChoice = this.id;
    console.log("User: " + userChoice)

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
     computerChoice = "rock";
   
    } else if(computerChoice <= 0.67) {
     computerChoice = "paper";
   
    } else {
     computerChoice = "scissors";
    }

    console.log("Computer: " + computerChoice)

    console.log(compare(userChoice, computerChoice));
    var result = compare(userChoice, computerChoice);
    function compare(playerSelction, computerSelection) {
        if (playerSelction === computerSelection) {
            return 'It is a tie!'
        } else if (computerSelection === 'rock') {
            if (playerSelction === 'scissors') {
                return 'You Lose!';
            } else if (playerSelction === 'paper') {
                return 'You Win!';
            }
        } else if (computerSelection === 'paper') {
            if (playerSelction === 'scissors') {
                return 'You Win!';
            } else if (playerSelction === 'rock') {
                return 'You Lose!';
            }
        } else if (computerSelection === 'scissors') {
            if (playerSelction === 'rock') {
                return 'You Win!';
            } else if (playerSelction === 'paper') {
                return 'You Lose!';
            }
        }
    }
    const results = document.querySelector('p');
    results.textContent = result;
    
    
}

