class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, larguraPersonagem, alturaPersonagem, posSpriteX, posSpriteY);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);

    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15, 100);

    inimigosArr.push(inimigo);
    inimigosArr.push(inimigoTroll);
    inimigosArr.push(inimigoVoador);
  }

  keyPressed(key) {
    if (keyCode === SPACE) {
      personagem.pula();
      somDoPulo.play()
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const inimigo = inimigosArr[this.inimigoAtual];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > inimigosArr.length - 1) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(5, 30));
    }

    if (personagem.estaColidindo(inimigo)) {
      // console.log("colidiu");
      personagem.pisca();
      image(imagemGameOver, width / 2 - 200, height / 3);
      // noLoop();
    }
  }
}