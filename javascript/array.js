//var alunos = new Array();
var alunos = [{Nathan:"0"}, "Esther", "Rosinêa", "Betania"];

for (var i in alunos){//i de index(indíce)
    console.log(i+" - "+alunos[i])
}
console.log("\n")
for (var aluno of alunos){//i de index(indíce)
    console.log(aluno)
}

console.log(Object.keys(alunos[0][0]))