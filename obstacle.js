let ghostLeft1;
let ghostLeft2;

class Obstacle {
  constructor() {
    this.xGhostLeft1 = width - 60;
    this.yGhostLeft1 = height - 590;
  }

  preload() {
    this.ghostLeft1 = loadImage("assets/scary-ghost.png");

  }

  draw() {
    image(
      this.ghostLeft1,
      this.xGhostLeft1,
      this.yGhostLeft1, 50, 50
    );
    // image(
    //   this.ghostLeft2,
    //   this.xGhostLeft2,
    //   this.yGhostLeft2,
    //   this.width,
    //   this.height
    // );
  }
}
