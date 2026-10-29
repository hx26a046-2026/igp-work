function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0, 0, 0);

  // TODO: 以下のキャラクター描画処理を、自作関数 drawCharacter に移動する
  const headSize = 40;
  noStroke();
  fill(255, 0, 0);
  circle(100, 200, headSize);
  rect(100 - (headSize / 2), 200 + (headSize / 2), headSize, headSize); // 体を頭と同じサイズ感で描画

  // TODO: 自作した関数 drawCharacter を、好きな座標・好きな色で 3 回呼び出す
}

// TODO: 引数として x, y, r, g, b を持つ関数 "drawCharacter" を定義する
//       x,y は頭の中心座標の指定、r,g,b はそれぞれ red/green/blue を意味し、塗り潰しの色の指定とする
//       関数の中身は上記 draw() のキャラクター描画処理に準じるが、座標や色を指定している部分を引数に置き換える必要がある
