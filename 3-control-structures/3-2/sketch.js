
let enemyX = 100;
let enemyY = 100;

const PLAYER_SIZE = 40;
const ENEMY_SIZE = 60;
const ENEMY_SPEED = 2;
const HIT_DISTANCE = (PLAYER_SIZE + ENEMY_SIZE) / 2;

function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);

  const playerX = mouseX;
  const playerY = mouseY;

  const distance = Math.sqrt(
    Math.pow(playerX - enemyX, 2) +
    Math.pow(playerY - enemyY, 2)
  );


  if (distance > 0) {


    if (distance > ENEMY_SPEED) {
      enemyX += (playerX - enemyX) / distance * ENEMY_SPEED;
      enemyY += (playerY - enemyY) / distance * ENEMY_SPEED;
    } else {
      // 距離が2以下なら位置を合わせて停止
      enemyX = playerX;
      enemyY = playerY;
    }
  }

  const newDistance = Math.sqrt(
    Math.pow(playerX - enemyX, 2) +
    Math.pow(playerY - enemyY, 2)
  );


  if (newDistance <= HIT_DISTANCE) {
    fill(255, 0, 0);
  } else {
    fill(255, 200, 200);
  }

  circle(enemyX, enemyY, ENEMY_SIZE);


  fill(0, 200, 255);
  circle(playerX, playerY, PLAYER_SIZE);


  fill(40, 40, 40);
  textSize(24);
  text('プレイヤーと敵の距離 = ' + Math.floor(newDistance), 20, 450);
}
