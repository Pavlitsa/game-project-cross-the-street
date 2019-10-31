class Game {
  constructor() {
    //console.log("game constructor");
    this.background = new Background();
    this.player1 = new Player1(300, windowHeight - 65);
    this.player2 = new Player2(1100, windowHeight - 75);
    this.ghosts = [];
  }

  preload() {
    // console.log("game preload");
    this.background.preload();
    this.player1.preload();
    this.player2.preload();

    this.ghostsPool = [
      {
        width: 70,
        height: 70,
        img: loadImage("assets/witch.png"),
        x: windowWidth - 70,
        y: windowHeight - 555,
        speed: -5
      },

      {
        width: 70,
        height: 70,
        img: loadImage("assets/cute-ghost.png"),
        x: windowWidth - 70,
        y: windowHeight - 410,
        speed: -3
      },

      {
        width: 70,
        height: 70,
        img: loadImage("assets/scary-ghost.png"),
        x: windowWidth - 70,
        y: windowHeight - 260,
        speed: -9
      },

      {
        width: 110,
        height: 110,
        img: loadImage("assets/scared-ghost.png"),
        x: 0,
        y: windowHeight - 500,
        speed: +8
      },
      {
        width: 140,
        height: 140,
        img: loadImage("assets/scary-pumpkin.png"),
        x: 0,
        y: windowHeight - 360,
        speed: +6
      },

      {
        width: 90,
        height: 90,
        img: loadImage("assets/knife-ghost.png"),
        x: 0,
        y: windowHeight - 160,
        speed: +4
      }
    ];
  }

  draw() {
    this.background.draw();
    this.player1.draw();
    this.player2.draw();

    if (gameMode === "on") {
      if (frameCount > 60 && frameCount % 60 === 0) {
        let randomIndex = Math.floor(Math.random() * this.ghostsPool.length);
        let randomGhost = this.ghostsPool[randomIndex];
        // get a random ghost from the ghosts array
        // pass the random object to the constructor for the Ghost class

        this.ghosts.push(new Ghost(randomGhost));
      }

      this.ghosts.forEach((ghost, index) => {
        ghost.draw();
        if (this.isCollision(this.player1, ghost)) {
          this.ghosts.splice(index, 1);
          this.player1.y1 = windowHeight - 70;
          score1.innerHTML -= 5;
        }
        if (this.isCollision(this.player2, ghost)) {
          this.ghosts.splice(index, 1);
          this.player2.y1 = windowHeight - 70;
          score2.innerHTML -= 5;
        }
      });
    }
  }

  isCollision(player, ghost) {
    // stroke("cyan");
    // noFill();
    // circle(player.x1 + player.width / 2, player.y1 + player.height / 2, 100);
    // stroke("magenta");
    // noFill();
    // circle(ghost.x + ghost.width / 2, ghost.y + ghost.height / 2, 100);

    // console.log(ghost.width, ghost.height, player.width, player.height);

    const distance = (player, ghost) => {
      return Math.sqrt(
        (player.x1 + player.width / 2 - (ghost.x + ghost.width / 2)) ** 2 +
          (player.y1 + player.height / 2 - (ghost.y + ghost.height / 2)) ** 2
      );
    };

    let dist = distance(player, ghost);
    if (dist <= 80) {
      return true;
    }
    return false;
  }
}
