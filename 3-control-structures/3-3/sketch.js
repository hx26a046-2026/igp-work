
const CARD_W = 40;
const CARD_H = 60;
const CARD_INTERVAL = 20;
const CARD_START_X = 30;
const CARD_START_Y = 10;
const CARD_COUNT_H = 10;
const CARD_COUNT_V = 6;

function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  background(40, 40, 40);
  noStroke();


  for (let i = 0; i < CARD_COUNT_V; i++) {


    for (let j = 0; j < CARD_COUNT_H; j++) {


      const x = CARD_START_X + j * (CARD_W + CARD_INTERVAL);
      const y = CARD_START_Y + i * (CARD_H + CARD_INTERVAL);


      if (
        mouseX >= x &&
        mouseX <= x + CARD_W &&
        mouseY >= y &&
        mouseY <= y + CARD_H
      ) {

        fill(255, 70, 90);
      } else {

        fill(200, 200, 200);
      }


      rect(x, y, CARD_W, CARD_H);
    }
  }
}
