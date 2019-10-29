const width = 1490;
const height = 770;


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
}

function keyPressed() {}

const game = new Game();