//tamanho da exibição do personagem na tela
// let alturaPersonagem = 135; // tamanho X
// let larguraPersonagem = 110; // tamanho Y

//posição do personagem na tela
// let posicaoPersonagemX = 0; 
// let posicaoPersonagemY = 0;

//posição inicial do recorte da sprite
// let posInicialSpriteX = 0;
// let posInicialSpriteY = 0;

//posição relativa a parte da sprite que será exibida
// let posSpriteX = 220; // posição x 
// let posSpriteY = 270; // posição y 

class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) 
    
    this.variacaoY = variacaoY;
    //altura inicial do personagem na tela
    this.yInicial = height-this.altura - 30;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = -50;
    this.pulos = 0;
    this.invencivel = false;
  } 
  
  pula() {
    if (this.pulos < 2) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos+=1;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        
    if(this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }

  tornarInvencivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
      this.desligaPisca();

    }, 1000);
  }
  
  estaColidindo(inimigo) {
    if (this.invencivel) {
      return false;
    }
    //debugging para exibir retangulos ao redor da sprite
    // noFill();
    // rect(this.x, this.y, this.largura, this.altura);
    // rect(inimigo.x, inimigo.y, inimigo.largura, inimigo.altura);
    const precisao = .7;
    const colisao = collideRectRect(this.x, this.y, this.largura*precisao, this.altura, inimigo.x, inimigo.y, inimigo.largura*precisao, inimigo.altura);
    
    return colisao;
    // return false;
  }  
}