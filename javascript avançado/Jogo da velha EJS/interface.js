document.addEventListener('DOMContentLoaded' , ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click' , handleClick);
    })
})
function handleClick(e){

    let square = e.target
    let position = square.id

    if (handleMove(position)){
    

        setTimeout(() => {
            alert("jogo acabou")
        }, 10); 
    }updateSquares();
}
function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id
        let symbols = board[position];

        if(symbols != ""){
            square.innerHTML = `<div class ='${symbols} '></div>`
        }

    })


}