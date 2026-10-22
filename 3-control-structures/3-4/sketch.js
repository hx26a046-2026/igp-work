
const SPACE_KEY = 32;
const PROBABILITY = 0.01;
let isKeyReleased = true;
let trialCount = 0;

function setup() {
  const canvas = createCanvas(640, 480);
  background(240, 255, 240);
}

function draw() {
  if (keyIsDown(SPACE_KEY)) {
    if (isKeyReleased) {
      isKeyReleased = false;

      background(240, 255, 240);
      fill(255, 100, 100);

      trialCount = 0;

      let x;
      let y;

      // XとYが両方0.01未満になるまで繰り返す
      do {
        x = Math.random();
        y = Math.random();

        trialCount++;

        circle(10 + (x * 400), 10 + (y * 400), 5);

      } while (x >= PROBABILITY || y >= PROBABILITY);
    }
  } else {
    isKeyReleased = true;
  }


  fill(40, 40, 40);
  textSize(20);
  text('※スペースを押す度に試行', 20, 450);

  if (trialCount > 0) {
    text(trialCount + '回目の試行で X と Y が両方 ' + PROBABILITY + ' 未満となった', 20, 470);
  }
}
