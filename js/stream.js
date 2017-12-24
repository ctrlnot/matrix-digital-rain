class Stream extends Symbol {
  constructor(x, y, s) {
    super(x, y);
    this.symbol = s;
    this.alpha = 255;
    this.fadeSpeed = 2;
    this._color = color(32, 194, 14, this.alpha);
  }

  isVisible() {
    return this.alpha;
  }

  slowlyFade() {
    this.alpha -= this.fadeSpeed;
    this._color = color(32, 194, 14, this.alpha);
  }

  changeSymbol() {
    // 1% chance to change symbol
    if(frameCount % SYMBOL_SIZE === 0 && (random(1) < 0.1)) {
      this.setRandomSymbol(this.generateRandomSymbol());
    }
  }

  run() {
    this.render();
    this.changeSymbol();
    if(this.alpha > 0) this.slowlyFade();
  }
}