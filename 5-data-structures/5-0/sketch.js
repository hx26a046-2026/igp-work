let tileImage;
let coinImage;

const coinXs = [294, 342, 534]; // コインの X 座標（最後の s は複数形を表す）

// preload() は画像などを事前に読み込むための関数
// 読み込みが完了してから setup() が実行される
function preload() {
  // 画像の読み込み
  coinImage = loadImage('assets/item_coin.gif');  // コイン
  tileImage = loadImage('assets/tile_ground_grass.png'); // 地面タイル
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

  // コインの描画
  for (let i = 0; i < coinXs.length; i++) {
    drawCoin(coinXs[i], 342);
  }

  // TODO: 地面タイルの描画を、配列と for 文を使って実装する

  // 地面タイルの描画
  drawTile(0, 432);
  drawTile(240, 432);
  drawTile(528, 432);
}

// コインの描画
function drawCoin(x, y) {
  const imageSize = 36;
  image(coinImage, x, y, imageSize, imageSize);
}

// タイルの描画
function drawTile(x, y) {
  const imageSize = 48;
  image(tileImage, x, y, imageSize, imageSize);
}
