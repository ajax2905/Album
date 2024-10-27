const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset');
const messageDisplay = document.getElementById('message');

let currentPlayer = 'Jogador'; // Jogador humano
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkWinner();

    if (gameActive) {
        currentPlayer = 'Computador'; // Passa a vez para a IA
        setTimeout(aiMove, 500); // IA faz o movimento após meio segundo
    }
}

function aiMove() {
    const availableCells = board
        .map((cell, index) => (cell === '' ? index : null))
        .filter(index => index !== null);

    if (availableCells.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const aiCellIndex = availableCells[randomIndex];

    board[aiCellIndex] = currentPlayer;
    cells[aiCellIndex].textContent = currentPlayer;

    checkWinner();

    if (gameActive) {
        currentPlayer = 'Jogador'; // Volta a vez para o jogador
    }
}

function checkWinner() {
    let roundWon = false;

    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[b] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        messageDisplay.textContent = `Jogador ${currentPlayer} ganhou!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        messageDisplay.textContent = 'Empate!';
        gameActive = false;
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'Jogador';
    messageDisplay.textContent = '';
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', resetGame);
