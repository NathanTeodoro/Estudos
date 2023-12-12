// carne              400gr por pessoa    + de 6h - 600gr
// cerveja            1200ml por pessoa   + de 6h - 2000ml
// Refigerante/Àgua   1000ml por pessoa   + de 6h 1500ml
//crianças valem pessoas 0,5

//quantos adultos bebem cerveja?

var inputadultos=document.getElementById("adultos");
var inputcriancas=document.getElementById("criancas");
var inputduracao=document.getElementById("duracao");
var inputadultosc=document.getElementById("adultosc");
var resultado = document.getElementById("resultado")

function calcular(){
    let adultos = inputadultos.value
    let criancas = inputcriancas.value
    let duracao = inputduracao.value
    let adultosc=inputadultosc.value

    let carne = ( )=>{
        if (duracao >= 6){
            return 650;
        }else{
            return 400;
        }
    }
 
    let cerveja = ( )=>{
        if (duracao >= 6){
            return 2000;
        }else{
            return 1200;
        }
    }
 
    let refigerante = ( )=>{
        if (duracao >= 6){
            return 1500;
        }else{
            return 1000;
        }
    }
 


    var qntcarne = adultos*carne()+(carne()/2*criancas);
    var qntcerveja = adultosc*cerveja();
    var qntrefrigerante = adultos*refigerante()+(refigerante()/2*criancas);
    console.log(qntcarne+"\n"+qntcerveja+"\n"+qntrefrigerante)

    resultado.innerHTML=`<p>${qntcarne}g de carne</p>`
    resultado.innerHTML+=`<p>${qntcerveja}ml de cerveja</p>`
    resultado.innerHTML+=`<p>${qntrefrigerante}ml de bebida</p>`
    
    
}