class Game {
  constructor() {
    //console.log("game constructor");
    this.background = new Background();
    this.player1 = new Player1(300, height - 65);
    this.player2 = new Player2(1100, height - 75);
    // this.ghost = new Ghost(randomGhost);
    // this.ghost1 = new Ghost1(width - 70, height - 580);
    // this.ghost2 = new Ghost2(width - 70, height - 400);
    // this.ghost3 = new Ghost3(width - 70, height - 220);
    // this.ghost4 = new Ghost4(0, height - 490);
    // this.ghost5 = new Ghost5(0, height - 330);
    // this.ghost6 = new Ghost6(0, height - 160);

    this.ghosts = [];
  }

  preload() {
    // console.log("game preload");
    this.background.preload();
    this.player1.preload();
    this.player2.preload();
    // this.ghost.preload(randomGhost);
    // this.ghost1.preload();
    // this.ghost2.preload();
    // this.ghost3.preload();
    // this.ghost4.preload();
    // this.ghost5.preload();
    // this.ghost6.preload();

    this.ghostsPool = [
      {
        width: 70,
        height: 70,
        img: loadImage("assets/witch.png"),
        x: width - 70,
        y: height - 580,
        speed: -5
      },

      {
        width: 70,
        height: 70,
        img: loadImage("assets/cute-ghost.png"),
        x: width - 70,
        y: height - 400,
        speed: -3
      },

      {
        width: 70,
        height: 70,
        img: loadImage("assets/scary-ghost.png"),
        x: width - 70,
        y: height - 220,
        speed: -9
      },

      {
        width: 110,
        height: 110,
        img: loadImage("assets/scared-ghost.png"),
        x: 0,
        y: height - 490,
        speed: +8
      },
      {
        width: 140,
        height: 140,
        img: loadImage("assets/scary-pumpkin.png"),
        x: 0,
        y: height - 330,
        speed: +6
      },

      {
        width: 90,
        height: 90,
        img: loadImage("assets/knife-ghost.png"),
        x: 0,
        y: height - 160,
        speed: +4
      }
    ];
  }

  draw() {
    this.background.draw();
    this.player1.draw();
    this.player2.draw();

    if (frameCount > 120 && frameCount % 60 === 0) {
      let randomIndex = Math.floor(Math.random() * this.ghostsPool.length);
      let randomGhost = this.ghostsPool[randomIndex];
      // get a random ghost from the ghosts array
      // pass the random object to the constructor for the Ghost class

      this.ghosts.push(new Ghost(randomGhost));
    }

    this.ghosts.forEach((ghost, index) => {
      ghost.draw();

      if (ghost.x + ghost.width <= 0) {
        //   remove obstacle
        this.ghosts.splice(index, 1);
      }
    });
  }
}
