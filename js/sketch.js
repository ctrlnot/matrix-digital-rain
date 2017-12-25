const SYMBOL_SIZE = 24;

let cols;
let streams = [];
let generators = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(width / SYMBOL_SIZE) * 2 + 1;
  for(let i = 0; i < cols; i++) {
    const x = i * (SYMBOL_SIZE / 2);
    const y = generateRandNumDivisble();
    generators.push(new Generator(x, y));
  }

  function generateRandNumDivisble() {
    return floor(random(1, 10)) * (SYMBOL_SIZE);
  }
}

function draw() {
  background(0);

  generators.forEach(generator => {
    generator.run();
  });

  for(let i = streams.length - 1; i >= 0; i--) {
    const s = streams[i];

    if(s.getAlpha() <= 0) {
      streams.splice(i, 1);
    } else {
      s.run();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cols = floor(width / SYMBOL_SIZE);
}
