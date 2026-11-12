
let successCount = 0;
let missCount = 0;

let targets = [{}, {}, {}, {}];

function setup() {
  createCanvas(640, 480);

  for (let i = 0; i < targets.length; i++) {
    resetTarget(targets[i]);
  }
}

function draw() {
  background(30, 30, 30);

  for (let i = 0; i < targets.length; i++) {
    updateTarget(targets[i]);
    drawTarget(targets[i]);
  }

  drawResult();
}

function updateTarget(target) {
  target.ageFrames++;

  if (target.ageFrames < 0) {
    return;
  }

  if (target.ageFrames >= target.deathFrames) {

    missCount++;
    resetTarget(target);
  }
}

function resetTarget(target) {
  target.size = random(40, 100);
  target.x = random(target.size / 2, width - target.size / 2);
  target.y = random(target.size / 2, height - target.size / 2);
  target.r = random(80, 255);
  target.g = random(80, 255);
  target.b = random(80, 255);
  target.ageFrames = random(-120, -30);
  target.deathFrames = random(120, 240);
}

function mousePressed() {
  for (let i = 0; i < targets.length; i++) {
    // TODO (A): ターゲットとの当たり判定
    if (isHitTarget(targets[i])) {
      successCount++;
      resetTarget(targets[i]);
      break;
    }
  }
}

function isHitTarget(target) {
  if (target.ageFrames < 0) {
    return false;
  }

  const distanceX = mouseX - target.x;
  const distanceY = mouseY - target.y;
  const distance = Math.sqrt(
    Math.pow(distanceX, 2) + Math.pow(distanceY, 2)
  );

  return distance < target.size / 2;
}

function drawTarget(target) {
  if (target.ageFrames < 0) {
    return;
  }

  const fadeFrames = 60;
  const fadeIn = Math.min(target.ageFrames / fadeFrames, 1);
  const fadeOut = Math.min(
    (target.deathFrames - target.ageFrames) / fadeFrames, 1
  );
  const alpha = Math.min(fadeIn, fadeOut) * 255;

  noStroke();
  fill(target.r, target.g, target.b, alpha);
  circle(target.x, target.y, target.size);
}

function drawResult() {
  fill(220, 220, 220);
  textSize(24);
  text('成功：' + successCount, 20, 35);
  text('失敗：' + missCount, 20, 70);
}
