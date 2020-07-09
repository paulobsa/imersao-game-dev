function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40); // existe um valor default definida pelo p5
  somDoJogo.loop();

  jogo = new Jogo();
  jogo.setup();
}

function keyPressed() {
  jogo.keyPressed(keyCode);
}

function draw() {
  jogo.draw();
}