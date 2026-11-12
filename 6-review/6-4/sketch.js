// TODO:
//   (1) Good よりも高評価の Perfect と Great を用意する。(判定の難易度は任意)
//   (2) 評価ごとにテキストの色を変える。(色は任意)
//   (3) Miss 以外が 2 回以上続く場合のコンボ数を評価と一緒に表示する。(コンボ数の表記方法は任意)
const LANE_COUNT = 4;
const LANE_WIDTH = 100;
const FIELD_X = 120;
const JUDGE_LINE_Y = 400;
const NOTE_START_Y = -20;
const NOTE_SPEED = 4;
const GOOD_DISTANCE = 70;

const JUDGEMENT_GRADE_GOOD = 'Good';
const JUDGEMENT_GRADE_MISS = 'Miss';

// 譜面データ (レーン番号、Perfect の位置に到達するフレーム)
let notes = [
  { lane: 0, perfectFrame: 225 },
  { lane: 1, perfectFrame: 285 },
  { lane: 2, perfectFrame: 345 },
  { lane: 3, perfectFrame: 405 },
  { lane: 0, perfectFrame: 465 },
  { lane: 2, perfectFrame: 495 },
  { lane: 1, perfectFrame: 525 },
  { lane: 3, perfectFrame: 555 },
  { lane: 0, perfectFrame: 615 },
  { lane: 1, perfectFrame: 675 },
  { lane: 3, perfectFrame: 735 },
  { lane: 2, perfectFrame: 795 },
  { lane: 0, perfectFrame: 855 },
  { lane: 3, perfectFrame: 885 },
  { lane: 1, perfectFrame: 915 },
  { lane: 2, perfectFrame: 945 },
  { lane: 0, perfectFrame: 1005 },
  { lane: 1, perfectFrame: 1005 },
  { lane: 2, perfectFrame: 1065 },
  { lane: 3, perfectFrame: 1065 },
  { lane: 3, perfectFrame: 1125 },
  { lane: 2, perfectFrame: 1185 },
  { lane: 1, perfectFrame: 1245 },
  { lane: 0, perfectFrame: 1305 },
];

let judgementGrade = null;
let judgementFrames = 0;

// setup() は全体の初期化処理を行うための関数 (p5.js から自動的に呼び出される)
// draw() の前に 1 度だけ実行される
function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
}

// draw() は毎フレームの処理を行うための関数 (p5.js から自動的に呼び出される)
// デフォルトでは 1 秒間に約 60 回実行される
function draw() {
  background(20, 24, 38);

  drawField();

  for (let i = 0; i < notes.length; i++) {
    updateNote(notes[i]);
    drawNote(notes[i]);
  }

  updateJudgement();
  drawJudgement();
}

// ノーツ 1 つの更新
function updateNote(note) {
  if (note.finished) {
    return;
  }

  const y = getNoteY(note);
  if (y < NOTE_START_Y) {
    return; // まだ出現前
  }

  if (y > JUDGE_LINE_Y + GOOD_DISTANCE) {
    // 基準線を大きく過ぎたら失敗判定
    setJudgement(GOOD_DISTANCE + 1);
    note.finished = true;
  }
}

// Perfect のフレームまでの残り時間から Y 座標を逆算する
function getNoteY(note) {
  // frameCount は 開始からのフレーム数を保持する p5.js の変数
  return JUDGE_LINE_Y + (frameCount - note.perfectFrame) * NOTE_SPEED;
}

// キーが押された時に p5.js から自動的に呼び出される関数
// 変数 key にはその時に押されたキーの情報が入っている
function keyPressed() {
  let lane = -1;

  switch (key) {
    case 'd':
    case 'D':
      lane = 0;
      break;
    case 'f':
    case 'F':
      lane = 1;
      break;
    case 'j':
    case 'J':
      lane = 2;
      break;
    case 'k':
    case 'K':
      lane = 3;
      break;
    default:
      return; // 指定キー以外の入力は無視
  }

  // レーン内の最も近いノーツを探す
  let nearestNote = null;
  let nearestDistance = GOOD_DISTANCE + 1; // 初期値はミスになる距離にしておく

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].lane === lane && !notes[i].finished && getNoteY(notes[i]) >= NOTE_START_Y) {
      const distance = Math.abs(getNoteY(notes[i]) - JUDGE_LINE_Y);
      if (distance < nearestDistance) {
        // より近いノーツがあれば記録を更新
        nearestNote = notes[i];
        nearestDistance = distance;
      }
    }
  }

  setJudgement(nearestDistance);

  if (nearestNote) {
    // 該当するノーツがあった場合は判定済みとする
    nearestNote.finished = true;
  }
}

// ノーツとの距離に応じて判定テキストを更新
function setJudgement(distance) {
  if (distance <= GOOD_DISTANCE) {
    judgementGrade = JUDGEMENT_GRADE_GOOD;
  } else {
    judgementGrade = JUDGEMENT_GRADE_MISS;
  }

  judgementFrames = 45; // テキストの表示時間
}

// フィールドの描画
function drawField() {
  // レーンの描画
  noStroke();

  for (let i = 0; i < LANE_COUNT; i++) {
    if (i % 2 === 0) {
      fill(38, 44, 65);
    } else {
      fill(46, 52, 75);
    }
    rect(FIELD_X + i * LANE_WIDTH, 0, LANE_WIDTH, height);
  }

  // 基準線の描画
  stroke(100, 220, 255);
  strokeWeight(4);
  line(FIELD_X, JUDGE_LINE_Y, FIELD_X + LANE_COUNT * LANE_WIDTH, JUDGE_LINE_Y);

  // レーンに対応するキーの描画
  noStroke();
  fill(230);
  textSize(24);
  text('D', FIELD_X + LANE_WIDTH * 0.5, 445);
  text('F', FIELD_X + LANE_WIDTH * 1.5, 445);
  text('J', FIELD_X + LANE_WIDTH * 2.5, 445);
  text('K', FIELD_X + LANE_WIDTH * 3.5, 445);
}

// ノーツ 1 つの描画
function drawNote(note) {
  if (note.finished || getNoteY(note) < NOTE_START_Y) {
    return;
  }

  const x = FIELD_X + note.lane * LANE_WIDTH + LANE_WIDTH / 2;
  const y = getNoteY(note);

  noStroke();
  fill(255, 110, 150);
  rect(x - 38, y - 10, 76, 20, 6);
}

// 判定テキストの更新
function updateJudgement() {
  if (judgementFrames > 0) {
    judgementFrames--;
    if (judgementFrames === 0) {
      judgementGrade = null;
    }
  }
}

// 判定テキストの描画
function drawJudgement() {
  if (judgementGrade === null) {
    return;
  }

  fill(255, 235, 100);
  textSize(36);
  text(judgementGrade, width / 2, 100);
}
