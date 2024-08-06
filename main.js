const tombol = document.getElementById("myButton");
const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const gameContainer = document.getElementById("gameContainer");
let score = 0;

tombol.onclick = () => {
  player.classList.add("jump");
  setTimeout(() => {
    player.classList.remove("jump");
  }, 500);
};

function scoreUpdate() {
  score++;
  document.getElementById("score").textContent = `Score ${score} m`;
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();
  const containerRect = gameContainer.getBoundingClientRect();

  if (
    playerRect.left < obstacleRect.right &&
    playerRect.right > obstacleRect.left &&
    playerRect.bottom > obstacleRect.top
  ) {
    // alert("Game Over");
    document.location.reload();
  } else {
    scoreUpdate();
  }
}

setInterval(checkCollision, 10);
