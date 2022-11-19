setInterval(handleClockRun, 1000);
function handleClockRun(){
    let time = new Date();
    let sec = time.getSeconds()/60;
    let min = (sec + time.getMinutes())/60;
    let hr = (min + time.getHours())/12;
    document.querySelector('.hr').style.setProperty('--thornRotation',hr*360);
    document.querySelector('.min').style.setProperty('--thornRotation',min*360);
    document.querySelector('.sec').style.setProperty('--thornRotation',sec*360);
}
handleClockRun();