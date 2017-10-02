let osc;
let playing = false;
let freq;
let vol;

function setup() {
  createCanvas(600, 400);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(240);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(0);
}

function touchStarted() {
  playing = true;
}

function touchEnded() {
  osc.amp(0, 0.5);
  playing = false;
}

function touchMoved() {
  vol = map(mouseY, windowHeight, 0, 0, 0.5);
  osc.amp(vol);
  freq = map(mouseX, 0, windowWidth, 20, 5000);
  osc.freq(freq);
}
