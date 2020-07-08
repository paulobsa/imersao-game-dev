let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoTroll;

let cenario;
let personagem;
// let inimigo;
// let inimigoVoador;
// let inimigoTroll;
let somDoJogo;
let somDoPulo;
let imagemGameOver;

let inimigoAtual = 0;

//tamanho da exibição do personagem na tela
const alturaPersonagem = 135; // tamanho X
const larguraPersonagem = 110; // tamanho Y

//posição relativa a parte da sprite que será exibida
const posSpriteX = 220; // posição x 
const posSpriteY = 270; // posição y 

const SPACE = 32;
const matrizInimigo = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626]
];
const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
];
const matrizInimigoTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const inimigosArr = [];


function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoTroll = loadImage('imagens/inimigos/troll.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, larguraPersonagem, alturaPersonagem, posSpriteX, posSpriteY);

  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, 52, 52, 104, 104, 10, 100);

  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100);

  const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width , 0, 200, 200, 400, 400, 10, 100);


  inimigosArr.push(inimigo);
  inimigosArr.push(inimigoTroll);
  inimigosArr.push(inimigoVoador);

  frameRate(40); // existe um valor default definida pelo p5
  somDoJogo.loop();
}

function keyPressed() {
  if (keyCode === SPACE) {
    personagem.pula();
    somDoPulo.play()
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.aplicaGravidade();

  const inimigo = inimigosArr[inimigoAtual];
  const inimigoVisivel = inimigo.x < - inimigo.largura;

  inimigo.exibe();
  inimigo.move();

  if (inimigoVisivel) {
    inimigoAtual++;
    if (inimigoAtual > inimigosArr.length-1) {
      inimigoAtual = 0;
    }
  }

  if (personagem.estaColidindo(inimigo)) {
    // console.log("colidiu");
    personagem.pisca();
    image(imagemGameOver, width / 2 - 200, height / 3);
    // noLoop();
  }
}