const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const countTags = document.querySelectorAll('div p');

const newYearDate = new Date("1,1,2023,00:00:00");

const colorList = ['yellow','pink','red','orangered','blue'];
var i = 0;
const newYearCount = ()=>{
    const currentDate = new Date();
    const daysDiffinMs = newYearDate - currentDate;
    if(daysDiffinMs < 0){
        clearInterval(newYearInterval);
        happyNewYear();
    }
    let days = Math.floor(daysDiffinMs / (1000*60*60*24));
    let hours = Math.floor(daysDiffinMs / (1000*60*60))%24;
    let minutes = Math.floor(daysDiffinMs / (1000*60))%60;
    let seconds = Math.floor(daysDiffinMs / 1000)%60;
    countTags.forEach(p=>{
        if (i == 0){
            p.classList.remove(colorList[4]);
            p.classList.add(colorList[i]);
        } else{
            p.classList.remove(colorList[i-1]);
            p.classList.add(colorList[i]); 
        }
    });
    i = i<4 ? ++i : 0;
    day.textContent = days < 10 ? `0${days}`: days;
    hour.textContent = hours < 10 ? `0${hours}`: hours;
    minute.textContent = minutes < 10 ? `0${minutes}`: minutes;
    second.textContent = seconds < 10 ? `0${seconds}`: seconds;
}

const happyNewYear = ()=>{
    document.querySelector('.countDownTxt').classList.add('hide');
    document.querySelector('.newYearTxt').classList.add('hide');
    document.querySelector('.count').classList.add('hide');
    document.querySelector('.container').classList.add('wish');
}

const newYearInterval = setInterval(newYearCount, 1000);