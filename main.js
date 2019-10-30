const width = 1490;
const height = 770;
const movement = 20;
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
let gameMode = "off";

function preload() {
  console.log("preload");
  game.preload();
}

function setup() {
  //   console.log("setup");
  createCanvas(width, height);
  //   game.setup();
}

function draw() {
  game.draw();
  console.log(gameMode);
  if (game.player1.y1 > height - 40) {
    game.player1.y1 = game.player1.y1 - 50;
  }

  if (game.player2.y1 > height - 40) {
    game.player2.y1 = game.player2.y1 - 50;
  }
}
function keyPressed() {
  if (keyCode === 81 && game.player1.y1 > 0) {
    // addScore();
    game.player1.moveForward();
    // console.log("hi");
  } else if (keyCode === 65 && game.player1.y1 < height) {
    game.player1.moveBackwards();
  }

  if (keyCode === 38 && game.player2.y1 > 0) {
    // addScore();
    game.player2.moveForward();
  } else if (keyCode === 40 && game.player2.y1 < height) {
    game.player2.moveBackwards();
  }

  if (game.player1.y1 <= height - 650) {
    game.player1.y1 = height - 80;
    addScore(score1);
  }

  if (game.player2.y1 <= height - 650) {
    game.player2.y1 = height - 80;
    addScore(score2);
  }
}

function addScore(score) {
  score.innerHTML = Number(score.innerHTML) + 10;
}

function mousePressed() {
  // if (mouseX > coordinates of start button)) {}
  if (gameMode === "off") {
    gameMode = "on";
  } else {
    gameMode = "off";
  }
}
const game = new Game();
