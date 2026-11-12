// TODO:
//   (1) ターゲットをクリックできているかどうかの判定をする。(TODO (A) 参照)
//       ※1 度のクリックでは 1 つのターゲットしか消せないものとする。
//   (2) ターゲットをクリックできた時に成功カウントを増やし、クリックできずに消滅してしまった場合に失敗カウントを増やす。
let successCount = 0;
let missCount = 0;

// ターゲット情報
//   x: 中心 X 座標
//   y: 中心 Y 座標
//   r: 色 (R)
//   g: 色 (G)
//   b: 色 (B)
//   size: 直径
//   ageFrames: 生存フレームカウント (マイナスの時は未登場)
//   deathFrames: 寿命フレーム
let targets = [{}, {}, {}, {}];

// setup() は全体の初期化処理を行うための関数 (p5.js から自動的に呼び出される)
// draw() の前に 1 度だけ実行される
function setup() {
  createCanvas(640, 480);

  // ターゲットの初期化
  for (let i = 0; i < targets.length; i++) {
    resetTarget(targets[i]);
  }
}

// draw() は毎フレームの処理を行うための関数 (p5.js から自動的に呼び出される)
// デフォルトでは 1 秒間に約 60 回実行される
function draw() {
  background(30, 30, 30);

  for (let i = 0; i < targets.length; i++) {
    updateTarget(targets[i]);
    drawTarget(targets[i]);
  }

  drawResult();
}

// ターゲット 1 つの更新
function updateTarget(target) {
  target.ageFrames++;
  if (target.ageFrames < 0) {
    return;
  }

  if (target.ageFrames >= target.deathFrames) {
    resetTarget(target);
  }
}

// ターゲットのパラメータをリセットする
function resetTarget(target) {
  // random(min, max) は p5.js の関数で「min 以上 max 未満」の数値を返す
  target.size = random(40, 100);
  target.x = random(target.size / 2, width - target.size / 2);
  target.y = random(target.size / 2, height - target.size / 2);
  target.r = random(80, 255);
  target.g = random(80, 255);
  target.b = random(80, 255);
  target.ageFrames = random(-120, -30); // 初期フレームカウント (ageFrames がマイナスの間は表示されないので次回登場までの猶予になる)
  target.deathFrames = random(120, 240);  // 消滅までのフレーム数
}

// マウスが押された時に p5.js から自動的に呼び出される
function mousePressed() {
  for (let i = 0; i < targets.length; i++) {
    // TODO (A): ターゲットとの当たり判定を行い、当たっている場合に必要な処理を書く
  }
}

// クリックされた位置がターゲットの内側か
function isHitTarget(target) {
  if (target.ageFrames < 0) { // まだ出現していない
    return false;
  }

  const distanceX = mouseX - target.x;
  const distanceY = mouseY - target.y;
  const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));
  return distance < target.size / 2;
}

// ターゲット 1 つの描画
function drawTarget(target) {
  if (target.ageFrames < 0) {
    return;
  }

  // 登場時と退場時はフェード
  const fadeFrames = 60;
  const fadeIn = Math.min(target.ageFrames / fadeFrames, 1);
  const fadeOut = Math.min((target.deathFrames - target.ageFrames) / fadeFrames, 1);
  const alpha = Math.min(fadeIn, fadeOut) * 255;

  noStroke();
  fill(target.r, target.g, target.b, alpha);
  circle(target.x, target.y, target.size);
}

// リザルトの描画
function drawResult() {
  fill(220, 220, 220);
  textSize(24);
  text('成功：' + successCount, 20, 35);
  text('失敗：' + missCount, 20, 70);
}
