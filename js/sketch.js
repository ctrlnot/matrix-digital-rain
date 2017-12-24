const SYMBOL_SIZE = 16;

let symbols = [];

function setup() {
  createCanvas(720, 480);

  symbols.push(new Symbol(0, 0));
  symbols.push(new Symbol(0, SYMBOL_SIZE));
}

function draw() {
  background(51);

  for(let symbol of symbols) {
    symbol.run();
  }
}
