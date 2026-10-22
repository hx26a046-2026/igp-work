let enemyX = 100;
let enemyY = 100;

const PLAYER_SIZE = 40;
const ENEMY_SIZE = 60;
const ENEMY_SPEED = 2;
const HIT_DISTANCE = (PLAYER_SIZE + ENEMY_SIZE) / 2;  // 両者の半径の合計が接触距離

function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);

  const playerX = mouseX;
  const playerY = mouseY;

  enemyX += ENEMY_SPEED;
  enemyY += ENEMY_SPEED;

  // 2 点間の距離は、三平方の定理により求められる
  const distance = Math.sqrt(Math.pow(playerX - enemyX, 2) + Math.pow(playerY - enemyY, 2));

  // 敵の描画
  fill(255, 200, 200);
  circle(enemyX, enemyY, ENEMY_SIZE);

  // プレイヤーの描画
  fill(0, 200, 255);
  circle(playerX, playerY, PLAYER_SIZE);

  // デバッグ情報
  fill(40, 40, 40);
  textSize(24);
  text('プレイヤーと敵の距離 = ' + Math.floor(distance), 20, 450);
}
