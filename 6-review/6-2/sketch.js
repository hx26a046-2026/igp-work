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
  flip: false,
  speed: 5,
};

let coins = [{}, {}, {}, {}, {}];

function preload() {
  coinImage = loadImage('assets/item_coin.gif');
  playerImages[0] = loadImage('assets/player_walk_mid.png');
  playerImages[1] = loadImage('assets/player_walk2.png');
}

function setup() {
  createCanvas(640, 480);

  for (let i = 0; i < coins.length; i++) {
    resetCoin(coins[i]);
  }
}

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

function updatePlayer() {
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= player.speed;
    player.flip = true;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    player.x += player.speed;
    player.flip = false;
  }

  const playerWidth = 48;

  if (player.x < playerWidth / 2) {
    player.x = playerWidth / 2;
  } else if (player.x > width - playerWidth / 2) {
    player.x = width - playerWidth / 2;
  }
}

function updateCoin(coin) {
  coin.y += coin.speed;

  if (isHitPlayer(coin)) {
    gameScore++;
    resetCoin(coin);
  }

  if (coin.y - coin.size / 2 > height) {
    resetCoin(coin);
  }
}

function resetCoin(coin) {
  coin.size = random(16, 64);
  coin.speed = random(1, 3);
  coin.x = random(coin.size, width - coin.size);
  coin.y = random(-240, -40);
}

function isHitPlayer(coin) {
  const distanceX = player.x - coin.x;
  const distanceY = player.y - coin.y;

  return Math.sqrt(
    Math.pow(distanceX, 2) +
    Math.pow(distanceY, 2)
  ) < 22 + (coin.size / 2);
}

function drawPlayer() {
  const pattern = Math.floor(frameCount / 20) % 2;
  const imageSize = 96;

  const x = player.x - imageSize / 2;
  const y = player.y - imageSize / 2;

  if (player.flip) {
    push();
    translate(x + imageSize, y);
    scale(-1, 1);
    image(playerImages[pattern], 0, 0, imageSize, imageSize);
    pop();
  } else {
    image(playerImages[pattern], x, y, imageSize, imageSize);
  }
}

function drawCoin(coin) {
  const x = coin.x - coin.size / 2;
  const y = coin.y - coin.size / 2;

  image(coinImage, x, y, coin.size, coin.size);
}

function drawGameScore() {
  fill(255);
  textSize(24);
  text('スコア：' + gameScore, 20, 35);
}
