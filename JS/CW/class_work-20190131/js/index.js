let secText = document.querySelector('.seconds')
let minText = document.querySelector('.minutes')
let houText = document.querySelector('.hours')
let dayText = document.querySelector('.days')




const deadline = new Date(2019, 04, 24, 12, 0, 0);

function timer() {
    let today = Date.now();
    let delta = deadline - today;
        // console.log(delta);

    let sec = Math.floor(delta / 1000 % 60);
        // console.log(sec);
    let min = Math.floor(delta / (1000*60) % 60);
        // console.log(min);
    let hour = Math.floor(delta / (1000*60*60) % 24);
        // console.log(hour);
    let day = Math.floor(delta / (1000*60*60*24));
        // console.log(day);
    secText.textContent = sec > 9 ? sec : '0'+sec;
    minText.textContent = min > 9 ? min : '0'+min;
    houText.textContent = hour > 9 ? hour : '0'+hour;
    dayText.textContent = day > 9 ? day : '0'+day;
}

setInterval(timer,1000);

// let seeBlock = document.querySelector('.cd-box');
// console.log(seeBlock.widht);
