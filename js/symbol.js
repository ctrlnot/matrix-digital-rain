class Symbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // this.speed = round(random(5, 10));
    this.speed = 1;
    this._color = color(32, 194, 14);
    this.symbol = this.setRandomSymbol();
  }

  setRandomSymbol() {
    const halfWidthKatakana = String.fromCharCode(0xff66 + round(random(0, 56)));

    return halfWidthKatakana;
  }

  changeSymbol() {
    // 10% chance to change symbol
    if(frameCount % SYMBOL_SIZE === 0 && (random(1) < 0.1)) {
      this.symbol = this.setRandomSymbol();
    }
  }

  move() {
    if(this.y > height) this.y = -SYMBOL_SIZE;

    this.y += this.speed;
  }

  render() {
    fill(this._color);
    noStroke();
    textAlign(LEFT, TOP);
    textSize(SYMBOL_SIZE);
    text(this.symbol, this.x, this.y);
  }

  run() {
    this.move();
    this.render();
    this.changeSymbol();
  }
}
