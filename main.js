const score1 = document.getElementById("scorel");
const score2 = document.getElementById("score2");
const period = document.getElementById("period_num");
const foull = document.getElementById("foull");
const timeoutl = document.getElementById("timeoutl");
const foulr = document.getElementById("foulr");
const timeoutr = document.getElementById("timeoutr");
const timer = document.getElementById("timer_num");
let countdown;

function add(score,num){
    score.textContent =  parseInt(score.textContent) + num;
}
function newgame(){
    score1.textContent = 0;
    score2.textContent = 0;
    foull.textContent = 0;
    foulr.textContent = 0;
    timeoutl.textContent = 0;
    timeoutr.textContent = 0;
    period.textContent = 0;
}
let time = 10 * 60;
document.getElementById("start").addEventListener('click',()=> {
    clearInterval(countdown);
    countdown = setInterval(()=>{
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    time --;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (time < 0){
        clearInterval(countdown);
        alert("Time's up");
    }
    timer.textContent= `${minutes}:${seconds}`;
}
,1000)});
document.getElementById("pause").addEventListener('click',()=> {
    clearInterval(countdown);
});
document.getElementById("reset").addEventListener('click',()=> {
    timer.textContent= `10:00`;
    time = 10 * 60;
    clearInterval(countdown);
});