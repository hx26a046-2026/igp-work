function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  background(255, 240, 240);

  fill(40, 40, 40);
  textSize(24);
  text('フレーム = ' + frameCount, 40, 80); // frameCount は毎フレームカウントアップされる p5.js の変数

  const FRAMES_PER_SECOND = 60;  // この課題では 1 秒間は 60 フレームと仮定する
  const totalSeconds = Math.floor(frameCount / FRAMES_PER_SECOND);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  text('経過時間 = ' + minutes + '分' + seconds + '秒', 40, 130);

}
