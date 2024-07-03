var hitrn = 0;
var score = 0;

function scoreIncreased(){
    score +=10;
    document.querySelector("#score").innerHTML = score;
}

function makeBubble(){
    var clutter = ""
    for(var i = 1; i <= 126; i++) {
    var rn = Math.floor(Math.random()*10)
    clutter += `<div id="bubble">${rn}</div>`
}
document.querySelector("#pbtm").innerHTML = clutter
}

function newTimer() {
    var timer = 60;
var timerInt = setInterval(function(){
    if (timer >= 0){
    document.querySelector("#timer").innerHTML = timer;
    timer--;
    }
    else {
        clearInterval(timerInt);
        document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
    }
}, 1000)
}


function getNewHit() {
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var number = Number(dets.target.textContent);
    if(hitrn === number) {
        scoreIncreased();
        getNewHit();
        makeBubble();
    }
})


makeBubble();
newTimer();
getNewHit();