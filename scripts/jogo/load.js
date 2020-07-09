function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  configuracoesJSON = loadJSON('scripts/configuracoes_jogo/configuracoes.json');
}