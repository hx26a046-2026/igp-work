
let counter = 0;

function setup() {
  const canvas = createCanvas(640, 480);
  frameRate(60);
}

function draw() {
  background(240, 255, 240);

  const alpha = counter % 256;

  noStroke();
  fill(255, 128, 128);
  circle(width / 2, height / 2, 200);

  fill(0, 0, 0, alpha);
  rect(width / 2, 0, width / 2, height);

  fill(40, 40, 40);
  textSize(24);

  text('フレーム = ' + counter, 40, 80);
  text('アルファ = ' + alpha, 40, 120);

  counter++;
}
