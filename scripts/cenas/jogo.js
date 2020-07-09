class Jogo {
  constructor() {
    this.indiceInimigo = 0;
    this.mapaInimigos = [
      {
        inimigo: 0,
        velocidade: 10
      },
      {
        inimigo: 1,
        velocidade: 30
      },
      {
        inimigo: 1,
        velocidade: 15
      },
      {
        inimigo: 2,
        velocidade: 40
      }
    ];
  }

  setup() {
    cenario = new Cenario(imagemCenario, 3);
    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, larguraPersonagem, alturaPersonagem, posSpriteX, posSpriteY);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10);

    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10);

    const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15);

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

    vida.draw();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapaInimigos[this.indiceInimigo];
    const inimigo = inimigosArr[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;

    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indiceInimigo++;
      inimigo.aparece();
      if (this.indiceInimigo > this.mapaInimigos.length - 1) {
        this.indiceInimigo = 0;
      }
      inimigo.velocidade = linhaAtual.velocidade;
    }

    if (personagem.invencivel) {
      personagem.pisca();
    }

    if (personagem.estaColidindo(inimigo)) {
      // console.log("colidiu");
      vida.perdeVida();
      personagem.tornarInvencivel();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 3);
        noLoop();
      }
    }
  }
}