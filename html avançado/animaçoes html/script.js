var jogador = document.getElementById("jogador");

var xinicial=0;
var ynicial=0;

function movejoador(x,y){

var posx = x + "px";
var posy = y + "px";

jogador.style.top = posx;
jogador.style.left = posy;



}
setInterval(function(){
    movejoador(xinicial++, ynicial++);
},50)