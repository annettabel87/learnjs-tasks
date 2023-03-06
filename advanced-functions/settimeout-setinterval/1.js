const printNumbers = (from, to) => {
    let i = from;
   
    let timerId = setInterval(() => {
        console.log(i);
        if (i ===to) {
            clearInterval(timerId);
        }
        i++;
    }, 1000);
}

const printNumbers2 = (from, to) => {
    let i = from;

    setTimeout(function print() {
        console.log(i);

        if(i < to) {
            setTimeout(print, 1000);
        }
        i++;
    },1000);
}

