const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_buttons')
const key = document.getElementsByTagName('button')
const action =  key.action 
if(!action){
    console.log('number')
}else if(
    action === "add" ||
    action === "subtract" ||
    action === "multiply" ||
    action === "divide "
){console.log ('operator')}
var display=document.getElementById("display")
display.innerHTML=key.parseInt(value)