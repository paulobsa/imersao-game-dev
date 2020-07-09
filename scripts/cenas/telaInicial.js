class TelaInicial {
  constructor() {

  }

  draw() {
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }

  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }

  _texto() {
    let CENTRO_TELA = width / 2;
    let ALTURA_TEXTO_1 = height / 3;
    let ALTURA_TEXT_2 = height / 6 * 3;

    textFont(fonteTelaInicial);
    textAlign(CENTER);
    
    textSize(50);
    text('As aventuras de', CENTRO_TELA, ALTURA_TEXTO_1);

    textSize(100);
    text('Hipsta', CENTRO_TELA, ALTURA_TEXT_2);
  }

  _botao() {
    let ALTURA_BOTAO = height / 7 * 5;
    botaoGerenciador.posicaoY = ALTURA_BOTAO;
    botaoGerenciador.draw();
  }
}