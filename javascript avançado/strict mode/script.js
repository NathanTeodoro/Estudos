"use strict"; // ==> com esse modo toda variavel necessita 
              // ser declarada 

var x = 7 
// podemos usar ou não o var
// porem se usarmos o var estamos definindo junto um escopo
// se não usarmos o var essa variavel fica pertencendo ao obj
// window(global) 

function p(){
    var y = 8
    console.log(y)
    //essa variavel y so existe na função p
}
console.log(x)
console.log(window)