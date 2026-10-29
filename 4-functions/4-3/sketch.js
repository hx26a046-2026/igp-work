let playerImage1;
let playerImage2;
let enemy1Image1;
let enemy1Image2;
let enemy2Image1;
let enemy2Image2;

// preload() は画像などを事前に読み込むための関数
// 読み込みが完了してから setup() が実行される
function preload() {
  // 画像の読み込み
  playerImage1 = loadImage('assets/player_walk_mid.png');
  playerImage2 = loadImage('assets/player_walk2.png');
  enemy1Image1 = loadImage('assets/enemy_walk1.png');
  enemy1Image2 = loadImage('assets/enemy_walk2.png');
  enemy2Image1 = loadImage('assets/enemy_chase1.png');
  enemy2Image2 = loadImage('assets/enemy_chase2.png');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);

  const playerImageSize = 96;
  const enemy1ImageSize = 64;
  const enemy2ImageSize = 64;

  // TODO: 必要な関数を作り、下記「ここから」〜「ここまで」を『3 回の関数呼び出し』に置き換える
  //       プログラム全体の挙動は、変更前と変わらないようにすること
  //       ※frameCount は p5.js の変数で、毎フレーム 1 増えるカウンタ

  // ---- ここから ----
  let sprite;
  
  if (Math.floor(frameCount / 20) % 2 === 0) {  // 20 フレームごとに絵を切り替える
    sprite = playerImage1;
  } else {
    sprite = playerImage2;
  }
  image(sprite, 100, 200, playerImageSize, playerImageSize);

  if (Math.floor(frameCount / 20) % 2 === 0) {  // 20 フレームごとに絵を切り替える
    sprite = enemy1Image1;
  } else {
    sprite = enemy1Image2;
  }
  image(sprite, 290, 240, enemy1ImageSize, enemy1ImageSize);

  if (Math.floor(frameCount / 20) % 2 === 0) {  // 20 フレームごとに絵を切り替える
    sprite = enemy2Image1;
  } else {
    sprite = enemy2Image2;
  }
  image(sprite, 460, 240, enemy2ImageSize, enemy2ImageSize);
  // ---- ここまで ----
}
