const paragraph = document.querySelector('.number');
const button = document.querySelector('.button');

console.log(paragraph.innerText);

button.addEventListener('click', writeRandomNumber);

// Version 2
let boolen = true;

function writeRandomNumber() {
    if (boolen) {
        intervalID = setInterval(() => {
            paragraph.innerText = Math.floor(Math.random()*10)
        }, 40);       
        boolen = false;
        button.innerText = 'STOP';
        button.classList.add('stop');
    } else {
        clearInterval(intervalID);
        boolen = true;
        button.innerText = 'START';
        button.classList.remove('stop');
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