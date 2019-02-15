const paragraph = document.querySelector('.number');
const button = document.querySelector('.buttonStop');
let boolen = true;

console.log(paragraph.innerText);

button.addEventListener('click', writeRandomNumber);

function writeRandomNumber() {
    if (boolen) {
        intervalID = setInterval(() => {
            paragraph.innerText = Math.floor(Math.random()*10)
        }, 20);       
        boolen = false;
        button.innerText = 'STOP';
    } else {
        clearInterval(intervalID);
        boolen = true;
        button.innerText = 'START';
    }
}

// Version 1
    // function writeRandomNumber() {
    //     let number = getRandomNumber();
    //     while (Number(paragraph.innerText) === number) {
    //         number = getRandomNumber();
    //         console.log('while');        
    //     };
    //     paragraph.innerText = number;
    // }
    // function getRandomNumber() {
    //     return Math.floor(Math.random()*10)
    // };