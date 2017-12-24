const SYMBOL_SIZE = 16;

let streams = [];
let generators = [];

function setup() {
  createCanvas(720, 480);

  // streams.push(new Stream(width/2, height/2, "x", streams.length));
  generators.push(new Generator(width/2, height/2));
}

function draw() {
  background(0);

  generators.forEach(generator => {
    generator.run();
  });

  for(let i = streams.length - 1; i >= 0; i--) {
    const s = streams[i];

    s.run();
    if(!s.isVisible()) streams.splice(i, 1);
  }
}
