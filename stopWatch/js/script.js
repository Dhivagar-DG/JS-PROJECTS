const HOUR = document.querySelectorAll('.hr');
const MIN = document.querySelectorAll('.min');
const SEC = document.querySelectorAll('.sec');
const MSEC = document.querySelectorAll('.msec');
const START = document.querySelector('.start');
const STOP = document.querySelector('.stop');
const RESET = document.querySelector('.reset');
let hr=min=sec=msec=0, starttimer;


// CLICK EVENTS
START.addEventListener('click', handleStartWatch);
STOP.addEventListener('click', handleStopWatch);
RESET.addEventListener('click', handleResetWatch);


// BUTTON STATES
document.onreadystatechange = ()=>{
    STOP.classList.add('active');
    RESET.classList.add('active');
    STOP.setAttribute('disabled','disabled');
    RESET.setAttribute('disabled','disabled');
}


// HANDLE START TIME
function handleStartWatch(){
    handleButtonStates("START");
    starttimer = setInterval(()=>{
        msec++;
        if(msec == 100){
            sec++;
            msec=0
        }
        if (sec == 60){
            min++;
            sec=0;
        }
        if(min == 60){
            hr++;
            min=0;
        }
        setTime(timeFormat(hr,min,sec,msec));
    },10);
}


// HANDLE STOP TIME
function handleStopWatch(){
    handleButtonStates("STOP");
    clearInterval(starttimer);
}


// HANDLE RESET TIME
function handleResetWatch(){
    handleButtonStates("RESET");
    hr=min=sec=msec=0;
    setTime(timeFormat(hr,min,sec,msec));
}


// HANDLE BUTTON STATES
function handleButtonStates(btnName){
    if(btnName == 'START'){
        START.classList.add('active');
        STOP.classList.remove('active');
        RESET.classList.add('active');
        START.setAttribute('disabled','disabled');
        RESET.setAttribute('disabled','disabled');
        STOP.removeAttribute('disabled');
    }else if(btnName == 'STOP'){
        START.classList.remove('active');
        STOP.classList.add('active');
        RESET.classList.remove('active');
        START.removeAttribute('disabled');
        STOP.setAttribute('disabled','disabled');
        RESET.removeAttribute('disabled');
    }else{
        RESET.classList.add('active');
        RESET.setAttribute('disabled','disabled');
    }
}


// HANDLE TIME FORMAT
function timeFormat(hr, min, sec, msec){
    hr = hr < 10 ? `0${hr}` : hr.toString();
    min = min < 10 ? `0${min}` : min.toString();
    sec = sec < 10 ? `0${sec}` : sec.toString();
    msec = msec < 10 ? `0${msec}` : msec.toString();
    return {hr,min,sec,msec};
}


// HANDLE SET TIME
function setTime({hr,min,sec,msec}){
    for (i=0;i<2;i++){
        HOUR[i].textContent = hr[i];
        MIN[i].textContent = min[i];
        SEC[i].textContent = sec[i];
        MSEC[i].textContent = msec[i];
    }
}