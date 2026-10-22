const SPACE_KEY = 32; // スペースキーのキーコード
const PROBABILITY = 0.01; // X と Y の単独での成功確率
let isKeyReleased = true;
let trialCount = 0;

function setup() {
  const canvas = createCanvas(640, 480);
  background(240, 255, 240);
}

function draw() {
  if (keyIsDown(SPACE_KEY)) { // スペースが押されている (keyIsDown() は押されている間ずっと true を返すことに注意)
    if (isKeyReleased) {  // 押しっぱなしの時は実行しない
      isKeyReleased = false;

      background(240, 255, 240);  // キーが押された時だけ画面クリア
      fill(255, 100, 100);

      let x = Math.random();
      let y = Math.random();
      circle(10 + (x * 400), 10 + (y * 400), 5);
    }
  } else {
    isKeyReleased = true; // キーを離した
  }

  // テキストは毎フレーム同じ内容を上書き
  fill(40, 40, 40);
  textSize(20);
  text('※スペースを押す度に試行', 20, 450);
  if (trialCount > 0) {
    text(trialCount + '回目の試行で X と Y が両方 ' + PROBABILITY + ' 未満となった', 20, 470);
  }
}
