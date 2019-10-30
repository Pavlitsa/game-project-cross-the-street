let img1;
let img2;

class Player1 {
  constructor(x1, y1) {
    //
    this.x1 = x1;
    this.y1 = y1;
    this.width = 100;
    this.height = 100;
  }

  preload() {
    this.img1 = loadImage("assets/pavi.png");
  }

  setup() {
    // this.originalY = this.y;
    // this.width = this.img.width;
    // this.height = this.img.height;
  }

  draw() {
    image(this.img1, this.x1, this.y1, this.width, this.height);
  }

  moveForward() {
    clear();
    console.log("move forward");
    this.y1 -= movement;
  }

  moveBackwards() {
    clear();
    console.log("move backwards");
    this.y1 += movement;
  }
}

class Player2 {
  constructor(x2, y2) {
    //
    this.x1 = x2;
    this.y1 = y2;
    this.width = 100;
    this.height = 100;

    // this.number = number;
  }

  preload() {
    this.img2 = loadImage("assets/nitsa.png");
  }

  setup() {
    // this.originalY = this.y;
    // this.width = this.img.width;
    // this.height = this.img.height;
  }

  draw() {
    image(this.img2, this.x1, this.y1, this.width, this.height);
  }

  moveForward() {
    clear();
    console.log("move forward");
    this.y1 -= movement;
  }

  moveBackwards() {
    clear();
    console.log("move backwards");
    this.y1 += movement;
  }
}
