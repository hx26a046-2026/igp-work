
let playerImages = [];
let enemyImages = [[], []];

let player = {
  x: 10,
  y: 200,
  flip: false,
  damage: false,
  speed: 1,
};

let enemies = [
  { type: 0, size: 48, speed: 2, x: 100, y: 240 },
  { type: 1, size: 24, speed: -0.5, x: 200, y: 240 },
  { type: 1, size: 48, speed: 1, x: 300, y: 100 },
  { type: 0, size: 24, speed: -1, x: 400, y: 300 },
  { type: 1, size: 64, speed: 2, x: 500, y: 200 },
  { type: 0, size: 32, speed: -2, x: 600, y: 400 },
];

function preload() {

  playerImages[0] = loadImage('assets/player_walk_mid.png');
  playerImages[1] = loadImage('assets/player_walk2.png');
  playerImages[2] = loadImage('assets/player_death.png');

  enemyImages[0][0] = loadImage('assets/enemy_walk1.png');
  enemyImages[0][1] = loadImage('assets/enemy_walk2.png');
  enemyImages[1][0] = loadImage('assets/enemy_chase1.png');
  enemyImages[1][1] = loadImage('assets/enemy_chase2.png');
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(235, 235, 200);

  updatePlayer();

  player.damage = false;

  for (let i = 0; i < enemies.length; i++) {
    updateEnemy(enemies[i]);
    drawEnemy(enemies[i]);

    if (isHitPlayer(enemies[i])) {
      player.damage = true;
    }
  }

  drawPlayer();
}

function updatePlayer() {
  if (player.x < mouseX) {
    player.x = Math.min(player.x + player.speed, mouseX);
    player.flip = false;
  } else if (player.x > mouseX) {
    player.x = Math.max(player.x - player.speed, mouseX);
    player.flip = true;
  }

  if (player.y < mouseY) {
    player.y = Math.min(player.y + player.speed, mouseY);
  } else if (player.y > mouseY) {
    player.y = Math.max(player.y - player.speed, mouseY);
  }
}

function drawPlayer() {
  const pattern = player.damage ? 2 : Math.floor(frameCount / 20) % 2;
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

function updateEnemy(enemy) {
  enemy.y += enemy.speed;

  if (enemy.speed > 0) {
    if (enemy.y > height + (enemy.size / 2)) {
      enemy.y = -(enemy.size / 2);
    }
  } else {
    if (enemy.y < -(enemy.size / 2)) {
      enemy.y = height + (enemy.size / 2);
    }
  }
}

function drawEnemy(enemy) {
  const pattern = Math.floor(frameCount / 20) % 2;

  image(
    enemyImages[enemy.type][pattern],
    enemy.x - (enemy.size / 2),
    enemy.y - (enemy.size / 2),
    enemy.size,
    enemy.size
  );
}

function isHitPlayer(enemy) {
  const distanceX = player.x - enemy.x;
  const distanceY = player.y - enemy.y;

  return Math.sqrt(
    Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
  ) < (enemy.size / 2 + 20);
}
