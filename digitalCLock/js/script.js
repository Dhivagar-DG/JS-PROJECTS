const HOUR = document.querySelectorAll('.hour');
const MINUTE = document.querySelectorAll('.minute');
const SECOND = document.querySelectorAll('.second');
const TIMEPERIOD = document.querySelector('.timePeriod');


const handleSetDate = ()=>{
    let currentDate = new Date();
    d = handleGetTime(currentDate);
    handleSetCalendar(currentDate);
    for (i=0; i<2; i++){
        HOUR[i].textContent = d.hours[i];
        MINUTE[i].textContent = d.minutes[i];
        SECOND[i].textContent = d.seconds[i];
    }
    TIMEPERIOD.textContent = d.timePeriod;
}


const handleGetTime = currentDate =>{
    let timePeriod = currentDate.getHours() > 12 ? 'PM':'AM';
    let hours = currentDate.getHours() > 12 ? (currentDate.getHours()-12).toString() :currentDate.getHours().toString();
    let minutes = currentDate.getMinutes().toString();
    let seconds = currentDate.getSeconds().toString();
    hours = hours < 10 ? `0${hours}`:hours;
    minutes = minutes < 10 ? `0${minutes}`:minutes;
    seconds = seconds < 10 ? `0${seconds}`:seconds;
    return {hours, minutes, seconds, timePeriod}
}

const handleSetCalendar = currentDate =>{
    let DAYLIST = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    let dayOftheWeek = currentDate.getDay();
    let monthOftheYear = currentDate.getMonth();
    let date = document.querySelectorAll('.date div');
    date[0].textContent = currentDate.getDate();
    date[1].textContent = currentDate.toLocaleString('default',{month:'short'});
    date[2].textContent = currentDate.getFullYear();
    document.querySelector(`.${DAYLIST[dayOftheWeek]}`).style.opacity = 1;
    document.querySelectorAll('.month div')[`${monthOftheYear}`].style.opacity = 1;
}
setInterval(handleSetDate, 1000);