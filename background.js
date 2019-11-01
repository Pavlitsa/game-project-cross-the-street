let bgTown;
let bgLanes;
let bgBottom;

class Background {
  constructor() {
    this.xTown = 0;
    this.xLanes = 0;
    this.xBottom = 0;
  }

  preload() {
    this.bgTown = loadImage("assets/halloween.png");
    this.bgBottom = loadImage("assets/cemetery.png");
    this.bgLanes = loadImage("assets/highway.png");
  }

  draw() {

    // upper part of background - town
    image(this.bgTown, this.xTown, 0, width / 2, 190);
    image(this.bgTown, width / 2, 0, width / 2, 190);

    // middle part of background - street
    image(this.bgLanes, this.xLanes, 190, width, window.innerHeight - 190);

    // bottom part of background - cemetery
    for (let i = 0; i < 5; i++) {
      image(
        this.bgBottom,
        (i * width) / 5,
        window.innerHeight - 170,
        width / 5,
        175
      );
    }
  }
}
