// TODO:
//   (1) 敵の数を増やす
//   (2) 状況に応じてプレイヤーの向きを変える
//   (3) 状況に応じてプレイヤーをダメージポーズに変える

let playerImages = [];
let enemyImages = [[], []];

// プレイヤー情報
let player = {
  x: 10,
  y: 200,
  flip: false,  // true の時は左向き
  damage: false,  // true の時はダメージポーズ
  speed: 1,
};

// 敵群情報
let enemies = [
  { type: 0, size: 48, speed: 2, x: 100, y: 240 },
  { type: 1, size: 24, speed: -0.5, x: 200, y: 240 },
];

// preload() は画像などを事前に読み込むための関数
// 読み込みが完了してから setup() が実行される
function preload() {
  // 画像の読み込み
  playerImages[0] = loadImage('assets/player_walk_mid.png');
  playerImages[1] = loadImage('assets/player_walk2.png');
  playerImages[2] = loadImage('assets/player_death.png');
  enemyImages[0][0] = loadImage('assets/enemy_walk1.png');
  enemyImages[0][1] = loadImage('assets/enemy_walk2.png');
  enemyImages[1][0] = loadImage('assets/enemy_chase1.png');
  enemyImages[1][1] = loadImage('assets/enemy_chase2.png');
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

  // プレイヤー更新
  updatePlayer();

  // 敵更新、描画
  for (let i = 0; i < enemies.length; i++) {
    updateEnemy(enemies[i]);
    drawEnemy(enemies[i]);
  }

  // プレイヤー描画
  drawPlayer();
}

// プレイヤーの更新
function updatePlayer() {
  if (player.x < mouseX) {
    player.x = Math.min(player.x + player.speed, mouseX);
  } else if (player.x > mouseX) {
    player.x = Math.max(player.x - player.speed, mouseX);
  }
  if (player.y < mouseY) {
    player.y = Math.min(player.y + player.speed, mouseY);
  } else if (player.y > mouseY) {
    player.y = Math.max(player.y - player.speed, mouseY);
  }
}

// プレイヤーの描画
function drawPlayer() {
  const pattern = player.damage ? 2 : Math.floor(frameCount / 20) % 2; // 20 フレームごとに絵を切り替える
  const imageSize = 96;
  const x = player.x - imageSize / 2;
  const y = player.y - imageSize / 2;

  if (player.flip) {
    // 左右反転させて描画
    push();
    translate(x + imageSize, y);
    scale(-1, 1);
    image(playerImages[pattern], 0, 0, imageSize, imageSize);
    pop();
  } else {
    image(playerImages[pattern], x, y, imageSize, imageSize);
  }
}

// 敵の更新
function updateEnemy(enemy) {
  enemy.y += enemy.speed;
  if (enemy.speed > 0) {
    if (enemy.y > height + (enemy.size / 2)) {  // 画面外に出たら反対側に移動 (height は画面の高さ)
      enemy.y = -(enemy.size / 2);
    }
  } else {
    if (enemy.y < -(enemy.size / 2)) {  // 画面外に出たら反対側に移動
      enemy.y = height + (enemy.size / 2);  // height は画面の高さ
    }
  }
}

// 敵の描画
function drawEnemy(enemy) {
  const pattern = Math.floor(frameCount / 20) % 2; // 20 フレームごとに絵を切り替える
  image(enemyImages[enemy.type][pattern], enemy.x - (enemy.size / 2), enemy.y - (enemy.size / 2), enemy.size, enemy.size);
}

// プレイヤーと接触しているかどうか
function isHitPlayer(enemy) {
  const distanceX = player.x - enemy.x;
  const distanceY = player.y - enemy.y;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < (enemy.size / 2 + 20);
}
