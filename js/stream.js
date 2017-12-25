class Stream extends Symbol {
  constructor(x, y, sym) {
    super(x, y);
    this.alpha = 255;
    this.symbol = sym;
    this.fadeSpeed = 3;
    this._color = color(32, 194, 14, this.alpha);
  }

  getAlpha() {
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