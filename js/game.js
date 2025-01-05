// JavaScript voor het pixelated spelletje

let score = 0;
const scoreElement = document.getElementById('score');
const gameBox = document.getElementById('game-box');

// Functie om de afbeelding op een willekeurige positie te plaatsen
function moveBox() {
    const gameContainer = document.querySelector('.game-container');
    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const randomX = Math.floor(Math.random() * (containerWidth - 50)); // 50 is de breedte van de afbeelding
    const randomY = Math.floor(Math.random() * (containerHeight - 50)); // 50 is de hoogte van de afbeelding

    gameBox.style.left = `${randomX}px`;
    gameBox.style.top = `${randomY}px`;
}

// Functie die de score bijwerkt wanneer er op de afbeelding wordt geklikt
gameBox.addEventListener('click', function() {
    score++;
    scoreElement.textContent = score;
    moveBox(); // Verplaats de afbeelding naar een nieuwe positie
});

// Start het spel door de afbeelding te verplaatsen na een korte vertraging
setInterval(moveBox, 1000); // Verplaats de afbeelding elke seconde
