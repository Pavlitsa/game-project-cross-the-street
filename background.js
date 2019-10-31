let bgTown;
let bgLanes;
let bgBottom;
let bgPumpkins;

class Background {
  constructor() {
    console.log("background constructor");
    this.xTown = 0;
    this.xLanes = 0;
    this.xBottom = 0;
  }

  preload() {
    console.log("background preload");

    this.bgTown = loadImage("assets/halloween.png");
    this.bgPumpkins = loadImage("assets/pumpkins.png");
    this.bgBottom = loadImage("assets/cemetery.png");
    this.bgLanes = loadImage("assets/highway.png");
  }

  draw() {
          image(this.bgTown, this.xTown, 0, width / 2, 190);
    image(this.bgTown, width / 2, 0, width / 2, 190);

    // for (let i = 0; i <= window.innerHeight; i++) {
    image(this.bgLanes, this.xLanes, 190, width, window.innerHeight - 190);
    // }

    for (let i = 0; i < 5; i++) {
      image(this.bgBottom, i * width / 5, window.innerHeight - 170, width / 5, 175);
    }

    // image(this.bgBottom, this.xBottom + 300, 685, 400, 175);
    // image(this.bgBottom, this.xBottom + 700, 685, 300, 175);
    // image(this.bgBottom, this.xBottom + 800, 685, 500, 175);
    // image(this.bgBottom, this.xBottom + 1200, 685, 500, 175);
    
    image(this.bgPumpkins, this.xBottom + 20, 790, 170, 50);
  }
}