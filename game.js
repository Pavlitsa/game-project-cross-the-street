class Game {
  constructor() {
    this.background = new Background();
    this.player1 = new Player1(300, height - 65);
    this.player2 = new Player2(1100, height - 75);
    this.ghosts = [];
  }

  preload() {
    this.background.preload();
    this.player1.preload();
    this.player2.preload();

    // create an array of objects in order to use OOP and have one class for all ghosts

    this.ghostsPool = [
      {
        width: 80,
        height: 80,
        img: loadImage("assets/witch.png"),
        x: width - 70,
        y: height - 550,
        speed: -5
      },

      {
        width: 70,
        height: 70,
        img: loadImage("assets/cute-ghost.png"),
        x: width - 70,
        y: height - 440,
        speed: -4
      },

      {
        width: 80,
        height: 80,
        img: loadImage("assets/scary-ghost.png"),
        x: width - 70,
        y: height - 260,
        speed: -9
      },

      {
        width: 150,
        height: 150,
        img: loadImage("assets/scared-ghost.png"),
        x: 0,
        y: height - 560,
        speed: +8
      },
      {
        width: 150,
        height: 150,
        img: loadImage("assets/scary-pumpkin.png"),
        x: 0,
        y: height - 380,
        speed: +6
      },

      {
        width: 100,
        height: 100,
        img: loadImage("assets/knife-ghost.png"),
        x: 0,
        y: height - 170,
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

      // player and ghosts collide, player returns to original position
      // the score changes by -5 points each time
      this.ghosts.forEach((ghost, index) => {
        ghost.draw();
        if (this.isCollision(this.player1, ghost)) {
          failSound.play();
          this.ghosts.splice(index, 1);
          this.player1.y1 = height - 70;
          score1.innerHTML -= 5;
        }
        if (this.isCollision(this.player2, ghost)) {
          failSound.play();
          this.ghosts.splice(index, 1);
          this.player2.y1 = height - 70;
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

    const distance = (player, ghost) => {
      return Math.sqrt(
        (player.x1 + player.width / 2 - (ghost.x + ghost.width / 2)) ** 2 +
          (player.y1 + player.height / 2 - (ghost.y + ghost.height / 2)) ** 2
      );
    };

    // defining the specific distance between player and ghost depending on which the collision happens

    let dist = distance(player, ghost);
    if (dist <= 80) {
      return true;
    }
    return false;
  }
}
