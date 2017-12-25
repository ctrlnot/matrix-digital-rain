class Generator extends Symbol {
  constructor(x, y) {
    super(x, y);
    this.speed = this.generateRandomSpeed();
    this.symbol = this.generateRandomSymbol();
  }

  changeSymbol() {
    if(frameCount % (floor(SYMBOL_SIZE / 3)) === 0) {
      this.setRandomSymbol(this.generateRandomSymbol());
    }
  }

  generateStream() {
    if(this.y % SYMBOL_SIZE === 0) {
      streams.push(new Stream(this.x, this.y, this.symbol));
    }
  }

  generateRandomSpeed() {
    return floor(random(2, 5));
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  move() {
    if(this.y > height) {
      this.y = -SYMBOL_SIZE;
      this.setSpeed(this.generateRandomSpeed());
    }

    this.y += this.speed;
  }

  run() {
    this.move();
    this.render();
    this.changeSymbol();
    this.generateStream();
  }
}