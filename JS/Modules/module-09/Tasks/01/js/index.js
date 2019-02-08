// Module 09
/* Task 01
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
  
  Учтите что на кнопку Start могно нажать бесконечное количество раз,
  сделайте так чтобы пока изменение темы запушено, нажатие на кнопку
  Start не имело эффекта.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const START = document.querySelector('.js-start');
const STOP = document.querySelector('.js-stop');
let count = 0;
START.addEventListener('click', changeColor);
STOP.addEventListener("click", stopChangeColor);

// document.body.style = `background-color: #F44336;`;
// console.log(document.body);

function changeColor() {
  // let random = Math.floor(Math.random()*colors.length);
  // console.log(random);
  // console.log(colors[random]);
  if(count > 0){return};
    ++count;
    timerID = setInterval(() => {
      let random = Math.floor(Math.random()*colors.length);
      document.body.style = `background-color: ${colors[random]};`
    }, 1000);  
};

function stopChangeColor() {
  clearInterval(timerID);
  --count;
};