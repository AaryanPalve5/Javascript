// Initialize scores and user name
let playerScore = 0;
let computerScore = 0;
let userName = 'Player';

// Function to get a random choice for the computer
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++; // Increment player score
        return `${userName} wins!`;
    }
    computerScore++; // Increment computer score
    return "Computer wins!";
}

// Function to handle the game logic
function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    // Update the display
    document.getElementById('playerDisplay').textContent = `${userName}: ${playerScore}`;
    document.getElementById('computerDisplay').textContent = `Computer: ${computerScore}`;
    document.getElementById('resultDisplay').textContent = `Result: ${result}`;

    // Optional: Add visual feedback
    document.querySelectorAll('.myButton').forEach(button => button.classList.remove('enabled'));
    document.querySelector(`.myButton[onclick*="${playerChoice}"]`).classList.add('enabled');
}

// Function to start the game
function startGame() {
    const usernameInput = document.getElementById('usernameInput').value;
    if (usernameInput.trim() !== '') {
        userName = usernameInput;
        document.getElementById('usernameSection').style.display = 'none';
        document.getElementById('gameSection').style.display = 'block';
    } else {
        alert('Please enter a name.');
    }
}

// Event listener for the start game button
document.getElementById('startGameButton').addEventListener('click', startGame);
