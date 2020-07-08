
class Cenario {
  constructor(imagem, velocidade) {
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.firstImg = 0;
    this.secondImg = width;
  }

  exibe() {
    image(this.imagem, this.firstImg, 0, width, height);
    image(this.imagem, this.secondImg, 0, width, height);
  }

  move() {
    this.firstImg = this.firstImg - this.velocidade;
    this.secondImg = this.secondImg - this.velocidade;

    if (this.firstImg < -width) {
      this.firstImg = width;
    }

    if (this.secondImg < -width) {
      this.secondImg = width;
    }
  }
}