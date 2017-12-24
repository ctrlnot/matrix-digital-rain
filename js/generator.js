class Generator extends Symbol {
  constructor(x, y) {
    super(x, y);
    this.speed = 2;
    this.symbol = this.generateRandomSymbol();
  }

  changeSymbol() {
    if(frameCount % SYMBOL_SIZE === 0) {
      this.setRandomSymbol(this.generateRandomSymbol());
    }
  }

  generateStream() {
    if(this.y % SYMBOL_SIZE === 0) {
      streams.push(new Stream(this.x, this.y, this.symbol));
    }
  }

  move() {
    if(this.y > height) this.y = -SYMBOL_SIZE;

    this.y += this.speed;
  }

  run() {
    this.move();
    this.render();
    this.changeSymbol();
    this.generateStream();
  }
}