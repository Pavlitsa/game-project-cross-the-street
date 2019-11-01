let img1;
let img2;

class Player1 {
  constructor(x1, y1) {
    //
    this.x1 = x1;
    this.y1 = y1;
    this.width = 100;
    this.height = 80;
    this.name = "Pavi";
  }

  preload() {
    this.img1 = loadImage("assets/pavi.png");
  }

  draw() {
    image(this.img1, this.x1, this.y1, this.width, this.height);
  }

  // set movements for player 1
  
  moveForward() {
    //console.log("move forward");
    clear();
    this.y1 -= movement;
  }

  moveBackwards() {
    clear();
    //console.log("move backwards");
    this.y1 += movement;
  }

  moveRight() {
    clear();
    //console.log("more right");
    this.x1 += movement;
  }

  moveLeft() {
    clear();
    //console.log("more right");
    this.x1 -= movement;
  }
}

class Player2 {
  constructor(x2, y2) {
    //
    this.x1 = x2;
    this.y1 = y2;
    this.width = 100;
    this.height = 80;
    this.name = "Nino";

    // this.number = number;
  }

  preload() {
    this.img2 = loadImage("assets/nitsa.png");
  }

  draw() {
    image(this.img2, this.x1, this.y1, this.width, this.height);
  }

  //set movements for player 2

  moveForward() {
    clear();
    this.y1 -= movement;
  }

  moveBackwards() {
    clear();
    this.y1 += movement;
  }

  moveRight() {
    clear();
    this.x1 += movement;
  }

  moveLeft() {
    clear();
    this.x1 -= movement;
  }
}
