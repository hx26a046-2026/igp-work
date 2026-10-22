const CARD_W = 40;
const CARD_H = 60;
const CARD_INTERVAL = 20; // カードの間隔
const CARD_START_X = 30;
const CARD_START_Y = 10;
const CARD_COUNT_H = 10;  // 横方向のカード枚数
const CARD_COUNT_V = 6; // 縦方向のカード枚数

function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  background(40, 40, 40);
  noStroke();

  const x = CARD_START_X;
  const y = CARD_START_Y;

  fill(200, 200, 200);
  rect(x, y, CARD_W, CARD_H);
  rect(x + (CARD_W + CARD_INTERVAL), y, CARD_W, CARD_H);
  rect(x, y + (CARD_H + CARD_INTERVAL), CARD_W, CARD_H);
}
