class Game {
  constructor() {
    //console.log("game constructor");
    this.background = new Background();
    this.player1 = new Player();
    this.player2 = new Player();
   this.obstacle1 = new Obstacle();
   this.obstacle2 = new Obstacle();
  }

  preload() {
    // console.log("game preload");
    this.background.preload();
    this.player1.preload();
    this.player2.preload();
    this.obstacle1.preload();
    this.obstacle2.preload();
  }

  draw() {
    this.background.draw();
    this.player1.draw();
    this.player2.draw();
    this.obstacle1.draw();
    this.obstacle2.draw();
  }
}
