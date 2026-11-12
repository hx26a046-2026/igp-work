// TODO: 以下の条件を全て満たすゲームを自由に制作する。
//   * プレイヤーはキー操作で上下左右に動く。プレイヤーは画面外へ出られない。
//   * 画面内には、プレイヤーが衝突するとゲームオーバーの要因になる「動くもの」が複数存在する。これは画面外に出ても構わない。
//   * ゲームオーバーになったことが、画面表示などによってプレイヤーに伝わる。
//   * 得点や生存時間など、プレイ結果を他人と比較できる数値を表示する。この数値はゲームオーバー後には変化させず、表示を維持する。
//   * リスタート機能はなくてもよい。

// preload() は画像などを事前に読み込むための関数 (p5.js から自動的に呼び出される)
// 読み込みが完了してから setup() が実行される

let player;
let enemies = [];
let gameOver = false;
let survivalTime = 0;
let startTime;


function preload() {
}


function setup() {
  createCanvas(640, 480);
  startGame();
}

function startGame() {
  player = {
    x: 320,
    y: 240,
    size: 30,
    speed: 5
  };

  enemies = [];
  gameOver = false;
  survivalTime = 0;
  startTime = millis();


  for (let i = 0; i < 5; i++) {
    enemies.push({
      x: random(30, 610),
      y: random(30, 450),
      size: 25,
      vx: random([-3, 3]),
      vy: random([-3, 3])
    });
  }
}
function draw() {
  background(20, 20, 30);

  if (!gameOver) {
    survivalTime = (millis() - startTime) / 1000;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      player.x -= player.speed;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
      player.x += player.speed;
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
      player.y -= player.speed;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
      player.y += player.speed;
    }

    player.x = constrain(
      player.x,
      player.size / 2,
      width - player.size / 2
    );

    player.y = constrain(
      player.y,
      player.size / 2,
      height - player.size / 2
    );

    for (let enemy of enemies) {
      enemy.x += enemy.vx;
      enemy.y += enemy.vy;

      if (enemy.x < 0 || enemy.x > width) {
        enemy.vx *= -1;
      }
      if (enemy.y < 0 || enemy.y > height) {
        enemy.vy *= -1;
      }

      let d = dist(
        player.x, player.y,
        enemy.x, enemy.y
      );

      if (d < (player.size + enemy.size) / 2) {
        gameOver = true;
      }
    }
  }

  fill(50, 150, 255);
  noStroke();
  circle(player.x, player.y, player.size);

  for (let enemy of enemies) {
    fill(255, 60, 60);
    circle(enemy.x, enemy.y, enemy.size);
  }

  fill(255);
  textSize(22);
  textAlign(LEFT);
  text(
    "TIME : " + survivalTime.toFixed(1) + " s",
    20, 35
  );

  if (gameOver) {
    fill(0, 0, 0, 180);
    rect(0, 0, width, height);

    fill(255, 60, 60);
    textAlign(CENTER);
    textSize(48);
    text("GAME OVER", width / 2, 200);

    fill(255);
    textSize(26);
    text(
      "TIME : " + survivalTime.toFixed(1) + " s",
      width / 2, 260
    );

    textSize(18);
    text(
      "SPACE : RESTART",
      width / 2, 310
    );
  }
}

function keyPressed() {
  if (gameOver && keyCode === 32) {
    startGame();
  }
}
