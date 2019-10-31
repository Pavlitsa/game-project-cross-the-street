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
    image(this.bgTown, this.xTown, 0, 700, 190);
    image(this.bgTown, this.xTown + 650, 0, 900, 190);

    for (let i = 183; i < 550; i += 170) {
      image(this.bgLanes, this.xLanes, i, windowWidth, 290);
    }

    image(this.bgBottom, this.xBottom, 675, 300, 175);
    image(this.bgBottom, this.xBottom + 300, 685, 400, 175);
    image(this.bgBottom, this.xBottom + 700, 685, 300, 175);
    image(this.bgBottom, this.xBottom + 800, 685, 500, 175);
    image(this.bgBottom, this.xBottom + 1200, 685, 500, 175);

    image(this.bgPumpkins, this.xBottom + 20, 790, 170, 50);
  }
}
