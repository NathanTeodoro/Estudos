var d = new Date(05,01,1996)//year month day hours minutes seconds miliseconds
//caso passe so um numero como argumento ele entenderá como milisegundo
//podemos passar expressoes matematicas (1000*60*5)1000 milisegundos(1min) * 60 (1 min) * 5 (5 min)
//strings tbm sao validas "mount day year hours minutes seconds"(modelo americano)
//"05/01/1996" 05 01 1996 05-01-1996
var days = ["domingo", "segunda" , "terça" , "quarta" , "quinta" , "sexta" , "sabado"];

console.log(dias[d.getDay()]);