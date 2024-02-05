
let pScore = 0;
let cScore = 0;

// start the game

const playBtn = document.querySelector('.play')
const introScreen = document.querySelector('.intro')
const matchScreen = document.querySelector('.match')

playBtn.addEventListener('click', () => {
    introScreen.classList.add('fadeOut')
    matchScreen.classList.add('fadeIn')
})


// playmatch

const options = document.querySelectorAll('.btncontainer button')
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
//computer Options
const computerOption = ['rock', 'paper', 'scissors']

options.forEach(option => {

    option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOption[computerNumber]
        //call compare hands 

        compareHands(this.innerHTML, computerChoice)

        //update hands

        playerHand.src = `./${this.textContent}.png`
        computerHand.src = `./${computerChoice}.png`

    })
})


const compareHands = (playerChoice, computerChoice) => {
    // update text
    const winner = document.querySelector(".winner");

    //checking for tie
    if (playerChoice === computerChoice) {
        winner.textContent = 'It is a tie';
        return;
    }
    //check for rock
    if (playerChoice === 'rock') {
        if (computerChoice == 'scissors') {
            winner.textContent = 'Player Wins';
            pScore++;

        }
        else {
            winner.textContent = 'Computer Wins';
            cScore++;
        }
        updateScore();
        return;
    }
    //check for paper
    if (playerChoice === 'paper') {
        if (computerChoice == 'rock') {
            winner.textContent = 'Player Wins';
            pScore++;
        }
        else {
            winner.textContent = 'Computer Wins';
            cScore++;
        }
        updateScore();
        return;
    }
    //check for Scissors
    if (playerChoice === 'scissors') {
        if (computerChoice == 'paper') {
            winner.textContent = 'Player Wins';
            pScore++;
        }
        else {
            winner.textContent = 'Computer Wins';
            cScore++;
        }
        updateScore();
        return;
    }
}
const updateScore = () => {
    const playerScore = document.querySelector('.pscore')
    const computerScore = document.querySelector('.cscore')

    playerScore.textContent = pScore;
    computerScore.textContent = cScore

}



