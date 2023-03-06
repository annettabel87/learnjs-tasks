const timer = () => {
    const clock = document.querySelector('#clock');
    const hoursSpan = clock.querySelector('.hour');
    const minuteSpan = clock.querySelector('.min');
    const secSpan = clock.querySelector('.sec');

    const date = new Date();

    const hours = date.getHours();    
    hoursSpan.innerHTML = (hours < 10) ? `0${hours}` : hours;

    const minutes = date.getMinutes();    
    minuteSpan.innerHTML = (minutes < 10) ? `0${minutes}` : minutes;

    const seconds = date.getSeconds();    
    secSpan.innerHTML = (seconds < 10) ? `0${seconds}` : seconds;
}

let timerId;

const clockStart = () => {
    timerId = setInterval(timer, 1000);
    timer();
}

const clockStop = () => {
    clearInterval(timerId);
    timerId = null;
}