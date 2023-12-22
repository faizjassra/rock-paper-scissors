const game = () => {
    let pScore = 0;
    let cScore = 0;

    // start the game
    const startGame = () => {
        const playBtn = document.querySelector('.play')
        const introScreen = document.querySelector('.intro')
        const matchScreen = document.querySelector('.match')

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut')
            matchScreen.classList.add('fadeIn')
        })
    }

    // playmatch
    const playMatch = () => {
        const options = document.querySelectorAll('.btncontainer button')
        // const rockOptions = document.querySelector('.rock')
        // const paperOptions = document.querySelector('.paper')
        // const scissorsOptions = document.querySelector(' .scissors')
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        //computer Options
        const computerOption = ['rock', 'paper', 'scissors']
        console.log(options)
        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOption[computerNumber]
                console.log(computerNumber, computerChoice)
                //call compare hands 
                compareHands(this.textContent, computerChoice)

                //update hands
                playerHand.src = `./assets/${this.textContent}.png`
                computerHand.src = `./assets/${computerChoice}.png`

                // playerHand.style.animation = "shakePlayer 2s ease"
                // computerHand.style.animation = "shakeComputer 2s ease"

            })
        })

        // rockOptions.addEventListener('click', function () {
        //     const computerNumber = Math.floor(Math.random() * 3);
        //     const computerChoice = computerOption[computerNumber]
        //     console.log(computerChoice)
        // })


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

    }


    startGame()
    playMatch()

}
game()