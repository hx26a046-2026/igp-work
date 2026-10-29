
function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0, 0, 0);

  // キャラクターを3回描画する
  drawCharacter(100, 100, 255, 0, 0); // 赤
  drawCharacter(200, 200, 100, 255, 50); // 緑
  drawCharacter(300, 300, 0, 0, 255); // 青
}

// キャラクターを描画する自作関数
function drawCharacter(x, y, r, g, b) {
  const headSize = 40;
  noStroke();
  fill(r, g, b);
  circle(x, y, headSize);
  rect(x - (headSize / 2), y + (headSize / 2), headSize, headSize);
}
