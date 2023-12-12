function Click(){
    console.log("clicou 2 texto")
}
function changeh1(){
    let h = document.getElementsByTagName("h1")[4]
    console.log(h)
}
function changeh2(){
    let input=document.getElementById("input")
    let h2=document.getElementsByTagName("h2")[0]
    h2.innerText=input.value;/**/
}
function changeh3(){
    let input=document.getElementById("input2")
    let h3=document.getElementsByTagName("h3")[0]
    h3.innerHTML=input.value;/**/
}
function hideh1(){
    let h1 = document.getElementsByTagName("h1")[3]
    h1.style.display="none";

}
function onOver(div){
    div.style.backgroundColor="red"
}
function onOut(element){
    element.style.backgroundColor="green"
}