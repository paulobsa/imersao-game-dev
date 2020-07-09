function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40); // existe um valor default definida pelo p5
  somDoJogo.loop();

  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed() {
  jogo.keyPressed(keyCode);
}

function draw() {
  cenas[cenaAtual].draw();
  
}