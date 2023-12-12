

let video = document.getElementById("video1")

function scontrols(){
    let control = document.getElementsByClassName("controls")
    control.style="visibility:visible;"

}


function plus(){
    video.currentTime+=15
}
function less(){
    video.currentTime-=15
}
function fastf(){
    video.playbackRate += 0.1
}
function gback(){
    video.playbackRate -= 0.1
}
function play(){
    video.play()
}
function stop(){
    video.pause()
    video.currentTime=0//voltar inicio 
}

