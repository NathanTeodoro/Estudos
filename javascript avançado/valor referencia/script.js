/*
function novoAluno(nome, idade){
    return {nome , idade}
    // um obj com {nome e idade}

}

let alunos = [
    novoAluno("Josef" , 21),
    novoAluno("Mario" , 45),
    novoAluno("Jefersson" , 39),
    novoAluno("RObert" , 28),
    novoAluno("Amarildo" , 26),
    
];

function menos30(alunos){
   return alunos.idade < 30
}
function mais30(alunos){
    return alunos.idade > 30 
}
//aqui selecionaremos os nomes dos alunos
let alunos30 = alunos.filter(menos30) 
//aqui armazenamos os nomes selecionados acima em uma variavel

console.log(alunos30)
//imprimimos

function filtro(callback){

    let alunosFiltrados = [];
    for (let aluno of this){ // para cada aluno de alunos(this)
        if(callback(aluno)){ //se o callback retornar verdadeiro
                            // add ele na lista 
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados;
}
alunos.filtro = filtro

console.log(alunos.filtro(mais30))
console.log(alunosFiltrados)

function nomeidade(){
    return aluno.nome+" tem "+aluno.idade+" anos.";
}
console.log(alunos.map(nomeidade))// esse metodo map
//cria um array com dados de outro array
//CUIDADO esse metodo pode alterar o array original
*/

turmaa=['nathan', 'esther']
turmab=[]

turmab=[...turmaa]              // usando esses metodos
turmab=Object.assign({},turmab);// turma b e turma a sao 
turmab=turmaa.slice()           // arrays diferentes

turmab.push('jose')
console.log(turmaa+'\n'+turmab)