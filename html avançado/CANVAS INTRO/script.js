let tela = document.getElementById("tela");

let contex = tela.getContext("2d");
contex.moveto(0,0);
contex.lineTo(250, 250);
contex.lineTo(500,0);
contex.strokeStyle = "blue";
contex.lineWidth = 5;
contex.stroke();