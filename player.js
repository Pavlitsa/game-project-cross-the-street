let img1;
let img2;

class Player {
    constructor() {
      //
      this.xPlayer1 = 300;
      this.yPlayer1 = height - 65;
      this.xPlayer2 = 1100;
      this.yPlayer2 = height - 75;
    }

    preload() {
      this.img1 = loadImage("assets/pavi.png");
      this.img2 = loadImage("assets/nitsa.png");
    }

    setup() {
      
      // this.originalY = this.y;
      // this.width = this.img.width;
      // this.height = this.img.height;
    }

    draw() {
        
      image(this.img1, this.xPlayer1, this.yPlayer1, this.width, this.height);
      image(this.img2, this.xPlayer2, this.yPlayer2,this.width, this.height);
    }


}
