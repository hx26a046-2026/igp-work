let coinImage;
let playerImage;

// コインが存在するかどうかのフラグ
let coinFlags = [
  [true],
  [true, true],
  [true, true, true],
  [true, true, true, true],
  [true, true, true, true, true],
];

// コイン取得枚数
let coinCount = 0;

// preload() は画像などを事前に読み込むための関数
// 読み込みが完了してから setup() が実行される
function preload() {
  // 画像の読み込み
  coinImage = loadImage('assets/item_coin.gif');  // コイン
  playerImage = loadImage('assets/player_stand.png');  // プレイヤー
}

// setup() は全体の初期化処理を行うための関数
// preload() の後、1 度だけ実行される
function setup() {
  createCanvas(640, 480);
}

// draw() は毎フレームの処理を行うための関数
// デフォルトでは 1 秒間に約 60 回実行される
function draw() {
  background(200, 240, 255);

  const playerX = mouseX;
  const playerY = mouseY;

  // コインの描画
  for (let y = 0; y < coinFlags.length; y++) {
    for (let x = 0; x < coinFlags[y].length; x++) {
      const coinX = 150 + (80 * x);
      const coinY = 50 + (80 * y);

      if (coinFlags[y][x]) {
        drawCoin(coinX, coinY);
      }
    }
  }

  // プレイヤーの描画
  drawPlayer(playerX, playerY);

  // コイン取得数
  textSize(20);
  text('コイン枚数 = ' + coinCount, 10, 440);
}

// コインの描画
function drawCoin(x, y) {
  const imageSize = 36;
  image(coinImage, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
}

// プレイヤーの描画
function drawPlayer(x, y) {
  const imageSize = 96;
  image(playerImage, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
}

// プレイヤーがコインに当たっているか
function isHitCoin(playerX, playerY, coinX, coinY) {
  const distanceX = playerX - coinX;
  const distanceY = playerY - coinY;
  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < 40;
}
