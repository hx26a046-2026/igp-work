
let tileImage;
let coinImage;

const coinXs = [294, 342, 534];

const tileXs = [
  0, 48, 96,
  240, 288, 336, 384, 432,
  528, 576, 624
];

function preload() {
  coinImage = loadImage('assets/item_coin.gif');
  tileImage = loadImage('assets/tile_ground_grass.png');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(200, 240, 255);

  for (let i = 0; i < coinXs.length; i++) {
    drawCoin(coinXs[i], 342);
  }

  for (let i = 0; i < tileXs.length; i++) {
    drawTile(tileXs[i], 432);
  }
}

function drawCoin(x, y) {
  const imageSize = 36;
  image(coinImage, x, y, imageSize, imageSize);
}

function drawTile(x, y) {
  const imageSize = 48;
  image(tileImage, x, y, imageSize, imageSize);
}
