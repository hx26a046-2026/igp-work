
let playerImage1;
let playerImage2;
let enemy1Image1;
let enemy1Image2;
let enemy2Image1;
let enemy2Image2;

function preload() {

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


  drawCharacter(playerImage1, playerImage2, 100, 200, playerImageSize);

  drawCharacter(enemy1Image1, enemy1Image2, 290, 240, enemy1ImageSize);

  drawCharacter(enemy2Image1, enemy2Image2, 460, 240, enemy2ImageSize);
}


function drawCharacter(image1, image2, x, y, size) {
  let sprite;

  if (Math.floor(frameCount / 20) % 2 === 0) {
    sprite = image1;
  } else {
    sprite = image2;
  }

  image(sprite, x, y, size, size);
}
