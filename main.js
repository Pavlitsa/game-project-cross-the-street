const windowWidth = 1500;
const windowHeight = 850;
const movement = 20;
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const startPage = document.querySelector(".start");
// const gameOver = document.querySelector(".gameOver");
let gameMode = "off";
let mainSound;

function preload() {
  console.log("preload");
  introSound = loadSound("assets/creepy-whistling-sound-effect.mp3");
  game.preload();
  //preload sound here
}

function setup() {
  //   console.log("setup");
  let canvas = createCanvas(windowWidth, windowHeight);
  let container = document.querySelector(".container");
  canvas.parent("container");
  //console.log(canvas);
  //   game.setup();
  console.log(container);
  introSound.setVolume(0.5); //change volume
  introSound.loop();
}

let gameOver = false;
let winner = "";

function draw() {
  if (gameOver) {
    document.querySelector("#gameover").style.visibility = "visible";
    document.querySelector(".player-won").innerHTML = `${winner} won !!!`;
  }
  game.draw();
  // console.log(gameMode);
  if (game.player1.y1 > windowHeight - 40) {
    game.player1.y1 = game.player1.y1 - 50;
  }

  if (game.player2.y1 > windowHeight - 40) {
    game.player2.y1 = game.player2.y1 - 50;
  }

  if (game.player1.x1 > windowWidth - 40) {
    game.player1.x1 = game.player1.x1 - 50; //to fix tomorrow / if player is between 0 and screen windowWidth - windowWidth of player
  }

  if (game.player2.x1 > windowWidth - 40) {
    game.player2.x1 = game.player2.x1 - 50;
  }
}

function keyPressed() {
  if (keyCode === 13) {
    gameMode = "on";
    startPage.style.visibility = "hidden";
  } else if (keyCode === 27) {
    gameMode = "off";
    startPage.style.visibility = "hidden";
  }

  if (keyCode === 87 && game.player1.y1 > 0) {
    game.player1.moveForward();
  } else if (keyCode === 83 && game.player1.y1 < windowHeight) {
    game.player1.moveBackwards();
  }

  if (keyCode === 38 && game.player2.y1 > 0) {
    game.player2.moveForward();
  } else if (keyCode === 40 && game.player2.y1 < windowHeight) {
    game.player2.moveBackwards();
  }

  if (keyCode === 69 && game.player1.x1 > 0) {
    game.player1.moveRight();
  } else if (keyCode === 81 && game.player1.x1 < windowWidth) {
    game.player1.moveLeft();
  }

  if (keyCode === 39 && game.player2.x1 > 0) {
    game.player2.moveRight();
  } else if (keyCode === 37 && game.player2.x1 < windowWidth) {
    game.player2.moveLeft();
  }

  // Press 'R' to reset the score and return players to original position when the game is over
  if (gameOver && keyCode === 82) {
    gameOver = false;
    gameMode = "on";
    document.querySelector("#gameover").style.visibility = "hidden";
    score1.innerHTML = 0;
    score2.innerHTML = 0;
    game.player1.y1 = windowHeight - 70;
    game.player2.y1 = windowHeight - 70;
  }

  if (game.player1.y1 <= windowHeight - 650) {
    game.player1.y1 = windowHeight - 80;
    addScore(score1, game.player1);
  }

  if (game.player2.y1 <= windowHeight - 650) {
    game.player2.y1 = windowHeight - 80;
    addScore(score2, game.player2);
  }

  if (keyCode === 32) {
    window.location.reload();
  }
}

function addScore(score, player) {
  let s = Number(score.innerHTML) + 10;
  if (s >= 100) {
    console.log(`${player.name} won!`);
    winner = player.name;
    gameOver = true;
    gameMode = "off";
  }
  score.innerHTML = s;
}

const game = new Game();
