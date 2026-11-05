let enemyImages = [];

// TODO: 下記 3 つの変数を削除し、代わりに enemy オブジェクトを使う
let enemyX = 320;
let enemyY = 240;
let enemySpeed = 5;

let enemy = {};

// preload() は画像などを事前に読み込むための関数
// 読み込みが完了してから setup() が実行される
function preload() {
  // 画像の読み込み
  enemyImages[0] = loadImage('assets/enemy_chase1.png');
  enemyImages[1] = loadImage('assets/enemy_chase2.png');
}

// setup() は全体の初期化処理を行うための関数
// preload() の後、1 度だけ実行される
function setup() {
  createCanvas(640, 480);
}

// draw() は毎フレームの処理を行うための関数
// デフォルトでは 1 秒間に約 60 回実行される
function draw() {
  background(235, 235, 200);

  if (keyIsDown(LEFT_ARROW)) {
    enemyX -= enemySpeed;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    enemyX += enemySpeed;
  }

  // TODO: 移動方向によって敵の向きを変える
  drawEnemy(enemyX, enemyY, false);

  textSize(20);
  text('X = ' + enemy.x, 10, 40);
  text('Y = ' + enemy.y, 10, 60);
  text('速度 = ' + enemy.speed, 10, 80);
  text('向き = ' + (enemy.flip ? '左' : '右'), 10, 100);
}

// 敵の描画 (flip が true の時に左向き、false の時に 右向き)
function drawEnemy(x, y, flip) {
  const pattern = Math.floor(frameCount / 20) % 2; // 20 フレームごとに絵を切り替える
  const imageSize = 64;

  if (flip) {
    // 左右反転させて描画
    push();
    translate(x + imageSize, y);
    scale(-1, 1);
    image(enemyImages[pattern], 0, 0, imageSize, imageSize);
    pop();
  } else {
    image(enemyImages[pattern], x, y, imageSize, imageSize);
  }
}
