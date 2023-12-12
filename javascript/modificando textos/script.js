let p = document.getElementById("p1")

p.innerHTML="novo conteudo"
p.innerText="novo conteudo 2"
p.textContent="novo conteudo 3"
p.innerContent="<h2>h2 dentro do p</h2>"//se refere a todo texto dento da tag p
p.innerText="<h3>h3 dentro do p</h3>"
p.innerHTML="<h4>h4 dentro do p</h4>"
p.className="paragraph"//add ou remove a class a o elemento
p.style="color:red"
var k = p.getAttribute("meuatt")
console.log(k)
p.setAttribute("meuatt","outro nome")
p.setAttribute("novoatt","valor do att")