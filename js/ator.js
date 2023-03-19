//código do ator

let xAtor = 100;
let yAtor = 368;
let colide = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 28, 28);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(limiteTela()){
      yAtor += 3;
    }
  }
}
  
function limiteTela(){
  return yAtor < 368;
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colide = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colide){
      colidiu();
      if (condicaoPontos()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 368;
  somColidiu.play();
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 215, 0));
  text(meusPontos, width / 5, 26);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos ++;
    somPontos.play();
    colidiu();
  }
}

function condicaoPontos(){
    return meusPontos > 0;
}    