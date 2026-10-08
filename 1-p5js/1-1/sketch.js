function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(100, 100, 155);
  fill(255, 255, 255,);
  circle(320, 310, 200);
  circle(320, 170, 150);

  fill(40, 180, 60);
  rect(250, 215, 140, 30, 15);
  rect(330, 230, 35, 45, 15);

  fill(255, 120, 30);
  triangle(320, 168, 320, 183, 340, 175);

  fill(30);
  circle(288, 145, 30);
  circle(352, 145, 30);

  fill(255);
  circle(288, 145, 12);
  circle(352, 145, 12);

  fill(200, 0, 0);
  text("Happy New Year !", 153, 410);
  textSize(40);

  fill(200, 30, 30);
  circle(320, 270, 20);
  circle(320, 305, 20);
  circle(320, 340, 20);

  fill(0, 0, 0);
  rect(300, 200, 50, 3, 15,);

  stroke(100, 40, 10);
  strokeWeight(8);
  line(250, 230, 180, 200);
  line(390, 230, 460, 200);
  noStroke();

}
