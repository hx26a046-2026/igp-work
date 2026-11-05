
let coinImage;
let playerImage;

let coinFlags = [
  [true],
  [true, true],
  [true, true, true],
  [true, true, true, true],
  [true, true, true, true, true],
];

let coinCount = 0;

function preload() {

  coinImage = loadImage('assets/item_coin.gif');
  playerImage = loadImage('assets/player_stand.png');
}


function setup() {
  createCanvas(640, 480);
}


function draw() {
  background(200, 240, 255);

  const playerX = mouseX;
  const playerY = mouseY;


  for (let y = 0; y < coinFlags.length; y++) {
    for (let x = 0; x < coinFlags[y].length; x++) {
      const coinX = 150 + (80 * x);
      const coinY = 50 + (80 * y);

      if (coinFlags[y][x]) {


        if (isHitCoin(playerX, playerY, coinX, coinY)) {
          coinFlags[y][x] = false;
          coinCount++;
        } else {
          drawCoin(coinX, coinY);
        }

      }
    }
  }


  drawPlayer(playerX, playerY);

  textSize(20);
  fill(0);
  text('コイン枚数 = ' + coinCount, 10, 440);
}

function drawCoin(x, y) {
  const imageSize = 36;
  image(coinImage, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
}

function drawPlayer(x, y) {
  const imageSize = 96;
  image(playerImage, x - imageSize / 2, y - imageSize / 2, imageSize, imageSize);
}

function isHitCoin(playerX, playerY, coinX, coinY) {
  const distanceX = playerX - coinX;
  const distanceY = playerY - coinY;

  return Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2)) < 40;
}
