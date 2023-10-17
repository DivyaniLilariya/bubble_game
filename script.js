var score = 0 ;
var hitrn = 0;

function incresescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
   hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble(){
    var clutter = ""
for(var i =1; i<=168; i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=`<div class="bubble"> ${rn}</div>`;
}
document.querySelector("#pbottom").innerHTML= clutter
}
var timer = 60;
function runtimer(){
    var timerint = setInterval(function(){
       if(timer > 0 ){
        timer--;
        document.querySelector("#timerValue").textContent = timer
       }else{
        clearInterval(timerint);
        document.querySelector("#pbottom").innerHTML = `<h1>Game Over </h1>`;
       }
    },1000)
}
document.querySelector("#pbottom")
.addEventListener("click", function(dets){
 var  clickedNum = Number(dets.target.textContent)
 if(clickedNum === hitrn){
    incresescore();
    makeBubble();
    getNewHit();
 }
});

getNewHit()
runtimer();
makeBubble();