const startstopbtn = document.querySelector('#startstopbtn')
const reset = document.querySelector('#reset') 
let seconds=0
let minutes=0
let hours=0
let leadingSeconds=0
let leadingMinutes=0
let leadinghours=0
let timeinterval=null;
let timeStatus="stopped"
function stopwatch(){
    seconds++
    if(seconds/60 === 1){
        seconds=0
        minutes++
        if(minutes/60 === 1){
            minutes=0
            hours++
        }
    }
    if(seconds<10){
        leadingSeconds="0"+seconds.toString()
    }
    else{
        leadingSeconds=seconds
    }
    if(minutes<10){
        leadingMinutes="0"+minutes.toString()
    }
    else{
        leadingMinutes= minutes
    }
    if(hours<10){
        leadinghours="0"+ hours.toString()
    }
    else{
        leadinghours=hours
    }
    let display = document.getElementById('timer').innerText = leadinghours + ":" +
    leadingMinutes + ":" + leadingSeconds
}
startstopbtn.addEventListener('click',function(){
    if(timeStatus === "stopped"){
        timeinterval = window.setInterval(stopwatch,1000)
        document.getElementById('startstopbtn').innerHTML = `<i class="fa fa-solid fa-pause" id="pause"</i>`
        timeStatus="started"
    }
        else{
            window.clearInterval(timeinterval)
        document.getElementById('startstopbtn').
        innerHTML = `<i class="fa fa-solid fa-play" id="play"</i>`
        timeStatus="stopped"
        }
    
})
reset.addEventListener('click',function(){
    window.clearInterval(timeinterval)
    seconds=0
    minutes=0
    hours=0
    document.getElementById('timer').innerHTML="00:00:00"

})

