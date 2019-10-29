const width = 1490;
const height = 770;
const movement = 20;
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

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
  // player1.draw();
  // player2.draw();

  if (game.player1.y1 > height - 40) {
    game.player1.y1 = game.player1.y1 - 50;
  }

  if (game.player2.y2 > height - 40) {
    game.player2.y2 = game.player2.y2 - 50;
  }
}

function keyPressed() {
  if (keyCode === 81 && game.player1.y1 > 0) {
    game.player1.moveForward();
    // console.log("hi");
  } else if (keyCode === 65 && game.player1.y1 < height) {
    game.player1.moveBackwards();
  }

  if (keyCode === 38 && game.player2.y2 > 0) {
    game.player2.moveForward();
  } else if (keyCode === 40 && game.player2.y2 < height) {
    game.player2.moveBackwards();
  }

  if (game.player1.y1 <= height - 650) {
    game.player1.y1 = height - 70;
  }

  if (game.player2.y2 <= height - 650) {
    game.player2.y2 = height - 70;
  }
}

function keyReleased() {
  addScore();
}

function addScore() {
  if (game.player1.y1 === height - 70) {
    score1.innerHTML = Number(score1.innerHTML) + 10;
  }
  if (game.player2.y2 === height - 70) {
    score2.innerHTML = Number(score2.innerHTML) + 10;
  }
}

const game = new Game();
