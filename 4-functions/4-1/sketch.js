const ENEMY_X = 320;
const ENEMY_Y = 240;
const ENEMY_SIZE = 100;
const PLAYER_SIZE = 40;
const HIT_DISTANCE = (ENEMY_SIZE + PLAYER_SIZE) / 2;  // 敵キャラの半径 + 自キャラの半径

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);

  // TODO: 自作関数 getDistance() を呼び出して敵とプレイヤーの距離を取得し、 distance に設定する
  const distance = 999;

  // 敵キャラの描画
  if (distance <= HIT_DISTANCE) { // 敵に当たった
    fill(255, 80, 80);
  } else {
    fill(255, 200, 200);
  }
  circle(ENEMY_X, ENEMY_Y, ENEMY_SIZE);

  // 自キャラの描画
  fill(0, 200, 255);
  circle(mouseX, mouseY, PLAYER_SIZE);

  // 距離情報
  fill(40, 40, 40);
  textSize(24);
  text('距離 = ' + Math.floor(distance), 20, 40);
}

// TODO: 2 点の座標を 4 つの引数 x1,y1,x2,y2 で受け取り、2 点間の距離を返す自作関数 getDistance() を定義する
//       2 点間の距離の計算方法は課題 3-2 参照
