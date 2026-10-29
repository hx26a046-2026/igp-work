
let playerImage_stand;
let playerImage_death;
let enemyImage;

function preload() {

  playerImage_stand = loadImage('assets/player_stand.png');
  playerImage_death = loadImage('assets/player_death.png');
  enemyImage = loadImage('assets/enemy_walk1.png');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);

  const playerX = 300;
  const playerY = 200;
  const enemyX = mouseX;
  const enemyY = mouseY;


  if (isHitEnemy(playerX, playerY, enemyX, enemyY)) {
    drawPlayer(playerX, playerY, 'death');
  } else {
    drawPlayer(playerX, playerY, 'stand');
  }


  drawEnemy(enemyX, enemyY);
}

function drawPlayer(x, y, pose) {
  let sprite;
  switch (pose) {
    case 'stand':
    default:
      sprite = playerImage_stand;
      break;
    case 'death':
      sprite = playerImage_death;
      break;
  }

  const playerImageSize = 96;
  image(sprite, x - 17, y - 3, playerImageSize, playerImageSize);
}

// 敵の描画
function drawEnemy(x, y) {
  const enemyImageSize = 64;
  image(enemyImage, x - 10, y - 26, enemyImageSize, enemyImageSize);
}


function isHitEnemy(playerX, playerY, enemyX, enemyY) {
  const px = playerX + 10;
  const py = playerY + 5;
  const pw = 41;
  const ph = 87;
  const ex = enemyX + 5;
  const ey = enemyY + 5;
  const ew = 36;
  const eh = 26;

  return (px < ex + ew) &&
    (px + pw > ex) &&
    (py < ey + eh) &&
    (py + ph > ey);
}
