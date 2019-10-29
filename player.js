let img1;
let img2;

class Player1 {
  constructor(x1, y1) {
    //
    this.x1 = x1;
    this.y1 = y1;
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
    image(this.img1, this.x1, this.y1, this.width - 10, this.height - 10);
  }

  moveForward() {
    clear()
    console.log("move forward");
    this.y1 -= movement;
  }

  moveBackwards() {
    clear()
    console.log("move backwards");
    this.y1 += movement;
  }
}

class Player2 {
  constructor(x2, y2) {
    //
    this.x2 = x2;
    this.y2 = y2;

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
    image(this.img2, this.x2, this.y2, this.width - 20, this.height - 20);
  }

  moveForward() {
    clear();
    console.log("move forward");
    this.y2 -= movement;
  }

  moveBackwards() {
    clear()
    console.log("move backwards");
    this.y2 += movement;
  }
}
