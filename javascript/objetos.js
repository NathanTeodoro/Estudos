var aluno = {
    nome:"Nathan",
    nota:[5,7,6,9]

}
console.log(aluno.nome);

console.log(aluno.nota[1]); 

aluno.matricula=12345;

console.log(aluno)

var novaprop = "LastName";

aluno[novaprop] = "Teodoro"; //add nova prop usando [] passar como "string" aluno["sobrenome"]=bezerra

console.log(aluno);

var aluna = new Object();

aluna.nome="Esther";
aluna.nota=[8,9,10,10];
aluna[novaprop]="Teodoro";

aluno.media=function(n1,n2,n3,n4){
    return (n1+n2+n3+n4)/2;
}
aluna.media=function(n1,n2,n3,n4){
    return (n1+n2+n3+n4)/2;
}

console.log(aluno.nome+"\n"+aluno.media(aluno.nota[0],aluno.nota[1],aluno.nota[2],aluno.nota[3]));
console.log(aluna.nome+"\n"+aluna.media(aluna.nota[0],aluna.nota[1],aluna.nota[2],aluna.nota[3]));
/*Tambe podemos nomear a função e chamala como prop
    function calcmedia(n1,n2...){
        return (n1+n2)/2
    }
    aluno.media=calcmedia

   + sem arguentos +
     function calcmedia(){
        return (this.nota[0]+thisnota[1])/2; this faz referencia a o obj em questao
                                             Nathan.lindo=n this.lindo=n
                                             esther.linda=s this.linda=s      

     }
   
   */

 function Novoaluno(nome,n1,n2,n3,n4){
        return{
            nome:nome,
            nota1:n1,
            nota2:n2,
            nota3:n3,
            nota4:n4,
            media: function(){
                return(this.nota1+this.nota2+this.nota3+this.nota4)/4;
            }
        }

    }
 
 var turma=[
    Novoaluno("Jose",10,6,3,5),
    Novoaluno("Eva",8,6,1,10),
 ];
 turma.forEach(function(elemento){
        console.log(elemento)
 })
 
 turma.push(Novoaluno("Davi",9,6,7,10))
 for(var aluno of turma){
    console.log(aluno.nome +"-"+aluno.media());

 }
//var a = new aluno(parametros da function)