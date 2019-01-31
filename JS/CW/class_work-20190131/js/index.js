let secText = document.querySelector('.seconds')
let minText = document.querySelector('.minutes')
let houText = document.querySelector('.hours')
let dayText = document.querySelector('.days')




const deadline = new Date(2019, 2, 31, 12, 0, 0);

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
    secText.textContent = sec > 10 ? sec : '0'+sec;
    minText.textContent = min > 10 ? min : '0'+min;
    houText.textContent = hour > 10 ? hour : '0'+hour;
    dayText.textContent = day > 10 ? day : '0'+day;


}



setInterval(timer,1000);