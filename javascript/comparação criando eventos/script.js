function f(e){
    console.log("teste")
    console.log(e)

}
function f1(e){
    console.log("teste f1")
    console.log(e)
    console.log(e.target)

}
window.onload=function(){
    let h1=document.getElementsByTagName("h1")[0];
    h1.addEventListener("click",f1);
}