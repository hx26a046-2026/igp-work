
const ENEMY_X = 320;
const ENEMY_Y = 240;
const ENEMY_SIZE = 100;
const PLAYER_SIZE = 40;
const HIT_DISTANCE = (ENEMY_SIZE + PLAYER_SIZE) / 2;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);


  const distance = getDistance(ENEMY_X, ENEMY_Y, mouseX, mouseY);


  if (distance <= HIT_DISTANCE) {
    fill(255, 80, 80);
  } else {
    fill(255, 200, 200);
  }
  circle(ENEMY_X, ENEMY_Y, ENEMY_SIZE);

  fill(0, 200, 255);
  circle(mouseX, mouseY, PLAYER_SIZE);


  fill(40, 40, 40);
  textSize(24);
  text('距離 = ' + Math.floor(distance), 20, 40);
}


function getDistance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

