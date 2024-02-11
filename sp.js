let timerDisplay=document.querySelector('.timerDisplay');
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');

let mlsec=0;
let secs=0;
let mins=0;
 
let timerId=null;

start.addEventListener('click',function(){
if(timerId !== null)
{
    clearInterval(timerId);
}
timerId=setInterval(setTime,10);
});
stop.addEventListener('click',function(){
    clearInterval(timerId);
    });
reset.addEventListener('click',function(){
        clearInterval(timerId);
        timerDisplay.innerHTML=`00 : 00 : 00`;
        mlsec=secs=mins=0;
        });
function setTime(){
    mlsec++;
    if(mlsec==100){
        mlsec=0;
        secs++;
        if(secs==60)
        {
            secs=0;
            mins++;
        }
    }
    let mlsecstring=mlsec<10?`0${mlsec}`:mlsec; 
let secsstring=secs<10?`0${secs}`:secs; 
let minsstring=mins
<10?`0${mins}`:mins; 

timerDisplay.innerHTML=`${minsstring} : ${secsstring} : ${mlsecstring}`;
}
