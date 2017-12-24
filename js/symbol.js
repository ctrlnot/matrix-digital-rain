class Symbol {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this._color = color(255);
  }

  generateRandomSymbol() {
    // Half width katakana
    return String.fromCharCode(0xff66 + round(random(0, 56)));
  }

  setRandomSymbol(symbol) {
    this.symbol = symbol;
  }

  render() {
    noStroke();
    fill(this._color);
    textAlign(LEFT, TOP);
    textSize(SYMBOL_SIZE);
    text(this.symbol, this.x, this.y);
  }
}
