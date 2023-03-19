//código da imagem do jogo

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//código dos sons
let somPontos;
let somColidiu;
let somTrilha;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  imagemCarro = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  
  somPontos = loadSound("Sons/pontos.wav");
  somColidiu = loadSound("Sons/colidiu.mp3");
  somTrilha = loadSound("Sons/trilha.mp3")
}