let tela2 = document.getElementById("tela2");
let tela = document.getElementById("tela");
let tela3 = document.getElementById("tela3");

let ctx = tela.getContext("2d");
let ctx2 = tela2.getContext("2d");
let ctx3 = tela3.getContext("2d");


ctx.beginPath();

ctx.lineWidth=4; // largura nova linha
ctx.strokeStyle="red";
ctx.moveTo(10,10); // começo da linha
ctx.lineTo(400,400); //ponto final da linha
ctx.stroke();

ctx.beginPath(); // criar nova linha

ctx.lineWidth=7;
ctx.strokeStyle="blue"; // cor da linha 
ctx.fillStyle  = "green";
ctx.moveTo(100,100); //começo da nova linha
ctx.lineTo(10,300);
ctx.lineTo(200,300)//move outra linha de um ponto a outro
ctx.closePath(); // fecha o path fazendo um triangulo nesse caso
ctx.stroke();
ctx.fill();//preenche o triangulo


ctx2.fillStyle  = "blue";
ctx2.fillRect(350, 350, 100, 100)
ctx.lineWidth=5;

ctx2.strokeStyle="red";
ctx2.closePath()


let x = 250;
let y = 250;
let raio = 100;

let inicio = 0;
let fim = 2*Math.PI;

ctx3.beginPath();
ctx3.strokeStyle="red";
ctx3.fillStyle="blue";
ctx3.arc(x,y,raio,inicio,fim);


ctx3.stroke()
