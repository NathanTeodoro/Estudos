let image = document.getElementById("like");
image.addEventListener("click", function(){
    //podemos mudar atributo da src direto tbm
    //image.src="./imagens/download.png"
    image.setAttribute("src","./imagens/download.png")

})
console.log(lista.dataset.num)
let lista = document.getElementById("lista")
let num = parseInt(lista.getAttribute("data-num"))
//podemos colocar o valor diretamente: 
//lista.dataset.n="7"
let id = lista.dataset.id // podemos pegar valor atributo assim tbm
console.log(id);         // detalhe: esse metodo passa o valor para uma string
let conteudo = ""
for (let i = 0; i < num; i++){
    conteudo+="<li>"+i+"</li>";
}
lista.innerHTML=conteudo;