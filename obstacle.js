class Ghost {
  constructor(obj) {
    this.x = obj.x;
    this.y = obj.y;
    this.width = obj.width;
    this.height = obj.height;
    this.speed = obj.speed;
    this.img = obj.img;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.x += this.speed;
  }
}
    