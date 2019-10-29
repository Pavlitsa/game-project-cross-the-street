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

    for (let i = 180; i < 700; i += 180) {
      image(this.bgLanes, this.xLanes, i, width, 200);
    }

    image(this.bgBottom, this.xBottom, 550, 600, 260);
    image(this.bgBottom, this.xBottom + 400, 550, 500, 260);
    image(this.bgBottom, this.xBottom + 900, 550, 600, 260);

    image(this.bgPumpkins, this.xBottom + 20, 720, 170, 50);
  }
}
