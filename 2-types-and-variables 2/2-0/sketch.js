// TODO: 変数 counter を、初期値 0 で宣言する。この変数は後で値を変更する。

// TODO: 変数 MAX_RADIUS を、初期値 400 で宣言する。この変数は値を変更しない。完成後に初期値を変えて挙動の違いを見てみよう。

// TODO: 変数 SPEED を、初期値 3 で宣言する。この変数は値を変更しない。完成後に初期値を変えて挙動の違いを見てみよう。

function setup() {
  const canvas = createCanvas(640, 480);
}

function draw() {
  // TODO: counter を 1 増やす。

  background(200, 200, 200);  // キャンバスを RGB=200,200,200 で塗り潰す

  // TODO: 変数 circleRadius を宣言する。初期値は「counter を SPEED 倍して、MAX_RADIUS で割った余り（剰余）」とする。const/let のどちらを使うべきか考える。

  noStroke(); // 縁取りを描画しない設定
  fill(255, 0, 0);  // RGB=255,0,0 での塗り潰し設定

  // TODO: (X, Y)=(320, 240) に、半径 circleRadius で円を描画する。

  // TODO: 変数 info を宣言する。初期値は、文字列「半径=」と circleRadius を結合したものとする。const/let のどちらを使うべきか考える。

  fill(30, 30, 30);  // RGB=30,30,30 での塗り潰し設定
  textSize(30); // 文字の大きさ設定

  // TODO: (X, Y)=(10, 50) に、info をテキストとして描画する。
}
