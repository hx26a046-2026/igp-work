// TODO:
//   (1) 左右のキー入力でプレイヤーを動かす。移動速度は player.speed とする。
//   (2) 移動方向に応じてプレイヤーの向きを変更する。
//   (3) コインが最大 5 枚登場するようにする（現在は最大 2 枚）。
//   (4) プレイヤーとコインが当たったら、得点を 1 増やしてコインのパラメータをリセットする。

let coinImage;
let playerImages = [];

let gameScore = 0;

// プレイヤー情報
let player = {
  x: 320,
  y: 400,
  flip: false,  // true の時は左向き
  speed: 5,
};

// コイン情報
let coins = [{}, {}];

// preload() は画像などを事前に読み込むための関数 (p5.js から自動的に呼び出される)
// 読み込みが完了してから setup() が実行される
function preload() {
  // 画像の読み込み
  coinImage = loadImage('assets/item_coin.gif');
  playerImages[0] = loadImage('assets/player_walk_mid.png');
  playerImages[1] = loadImage('assets/player_walk2.png');
}

// setup() は全体の初期化処理を行うための関数 (p5.js から自動的に呼び出される)
// preload() の後、1 度だけ実行される
function setup() {
  createCanvas(640, 480);

  // コインの初期化
  for (let i = 0; i < coins.length; i++) {
    resetCoin(coins[i]);
  }
}

// draw() は毎フレームの処理を行うための関数 (p5.js から自動的に呼び出される)
// デフォルトでは 1 秒間に約 60 回実行される
function draw() {
  background(25, 35, 60);

  updatePlayer();

  for (let i = 0; i < coins.length; i++) {
    updateCoin(coins[i]);
    drawCoin(coins[i]);
  }

  drawPlayer();
  drawGameScore();
}

// プレイヤーの更新
function updatePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
  }
  if (keyIsDown(RIGHT_ARROW)) {
  }

  // 画面外への移動を制限 ("width" は p5.js の変数で画面横幅を表す)
  const playerWidth = 48; // 見た目のおおよその横幅
  if (player.x < playerWidth / 2) {
    player.x = playerWidth / 2;
  } else if (player.x > width - playerWidth / 2) {
    player.x = width - playerWidth / 2;
  }
}

// コイン (1 枚) の更新
function updateCoin(coin) {
  coin.y += coin.speed;

  if (coin.y - coin.size / 2 > height) {
    resetCoin(coin);
  }
}

// コインのリセット
// (画面より上のランダムな位置に配置。大きさ・落下速度もランダム)
function resetCoin(coin) {
  // random(min, max) は p5.js の関数で「min 以上 max 未満」の数値を返す
  coin.size = random(16, 64);
  coin.speed = random(1, 3);
  coin.x = random(coin.size, width - coin.size);
  coin.y = random(-240, -40);
}

// プレイヤーがコインに当たっているか
function isHitPlayer(coin) {
  const distanceX = player.x - coin.x;
  const distanceY = player.y - coin.y;
  // コインのサイズを考慮して、プレイヤーとの距離が十分に近ければ当たりとする
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < 22 + (coin.size / 2);
}

// プレイヤーの描画
function drawPlayer() {
  const pattern = Math.floor(frameCount / 20) % 2; // 20 フレームごとに絵を切り替える
  const imageSize = 96;

  // プレイヤーの中心座標 (player.x, player.y) から左上の座標を計算
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

// コインの描画
function drawCoin(coin) {
  // コインの中心座標 (coin.x, coin.y) から左上の座標を計算
  const x = coin.x - coin.size / 2;
  const y = coin.y - coin.size / 2;
  image(coinImage, x, y, coin.size, coin.size);
}

// スコアの描画
function drawGameScore() {
  fill(255);
  textSize(24);
  text('スコア：' + gameScore, 20, 35);
}
