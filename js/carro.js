//código do carro

//carros
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 262, 318]; 
let velocCarros = [2, 2.5, 3.2, 4.8, 2.3, 4.1];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i ++){
       image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro(){
  for(let n = 0; n < imagemCarros.length; n ++){
    if (meusPontos < 5){
      xCarros[n] -= velocCarros[n];
    } else {
      xCarros[n] -= velocCarros[n] + 1.5;
    }
  }
}

function retornaPosicaoInicial(){
    for(let i = 0; i < imagemCarros.length; i ++){
        if(passouTodaTela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}