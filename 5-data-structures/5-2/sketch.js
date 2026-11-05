
let enemyImages = [];

let enemy = {
  x: 320,
  y: 240,
  speed: 5,
  flip: false
};

function preload() {

  enemyImages[0] = loadImage('assets/enemy_chase1.png');
  enemyImages[1] = loadImage('assets/enemy_chase2.png');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);


  if (keyIsDown(LEFT_ARROW)) {
    enemy.x -= enemy.speed;
    enemy.flip = true;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    enemy.x += enemy.speed;
    enemy.flip = false;
  }

  drawEnemy(enemy.x, enemy.y, enemy.flip);

  textSize(20);
  fill(0);
  text('X = ' + enemy.x, 10, 40);
  text('Y = ' + enemy.y, 10, 60);
  text('速度 = ' + enemy.speed, 10, 80);
  text('向き = ' + (enemy.flip ? '左' : '右'), 10, 100);
}

function drawEnemy(x, y, flip) {
  const pattern = Math.floor(frameCount / 20) % 2;
  const imageSize = 64;

  if (flip) {

    push();
    translate(x + imageSize, y);
    scale(-1, 1);
    image(enemyImages[pattern], 0, 0, imageSize, imageSize);
    pop();
  } else {
    image(enemyImages[pattern], x, y, imageSize, imageSize);
  }
}
