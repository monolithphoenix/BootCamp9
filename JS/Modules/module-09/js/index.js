/*
  Создайте скрипт секундомера.  
  По ссылке можно посмотреть пример выбрав Stopwatch http://www.online-stopwatch.com/full-screen-stopwatch/
  
  Изначально в HTML есть разметка:
  
  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>
  
  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
       
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, продолжается отсчет времени, 
    а текст меняется на 'Pause'. То есть если во время нажатия 'Pause' прошло 6 секунд 
    со старта, при нажатии 'Continue' 10 секунд спустя, секундомер продолжит отсчет времени 
    с 6 секунд, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/
const stopwatch = document.querySelector(".stopwatch");
const clockface = document.querySelector(".js-time");
const lapsList = document.querySelector(".js-laps");

const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");

let frizeTimer = 0;
let diferense = 0;

startBtn.addEventListener('click', startPauseTimer);
lapBtn.addEventListener('click', getCurentTimerValue);
resetBtn.addEventListener('click', resetTimer);
stopwatch.addEventListener('click', changeButtonColor);

function resetTimer() {
    stopTimer();
    frizeTimer = 0;
    diferense = 0;
    startBtn.innerText = 'Start';
    lapsList.innerHTML = '';
    updateClockface(clockface, diferense);
}

function getCurentTimerValue() {
  let curentTimerValue = diferense;
  lapsList.innerHTML += `<li>${getFormattedTime(curentTimerValue)}</li>`;
}

function startPauseTimer() {
  const STARTTIME = Date.now();
  if (startBtn.textContent === 'Start') {
    startBtn.innerText = 'Pause';
    ID = setInterval(() => {
      let newTime = Date.now();
      diferense = newTime-STARTTIME;
      updateClockface(clockface, diferense);
    }, 100)
    return;
  };
  if (startBtn.textContent === 'Pause') {
    startBtn.innerText = 'Continue';
    return stopTimer();
  };
  if (startBtn.textContent === 'Continue') {
    startBtn.innerText = 'Pause';
    ID = setInterval(() => {
      let newTime = Date.now();
      diferense = newTime-STARTTIME+frizeTimer;
      updateClockface(clockface, diferense);
    }, 100)
  }
};

function stopTimer() {
  frizeTimer = diferense;
  clearInterval(ID);
}

// const timer = {
//   startTime: null,
//   deltaTime: null,
//   id: null
// };

// Вставка времени в HTML
function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

// Подсветка активной кнопки на 0.5 сек
function changeButtonColor(e) {
  if (e.target.nodeName === 'BUTTON') {
    startBtn.classList.remove('active');
    lapBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    e.target.classList.add('active');
    setTimeout(() => e.target.classList.remove('active'), 500)
  }
}

// Преобразователь времени
function getFormattedTime(time) {
  let date = new Date(time);
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mil = Math.floor(date.getMilliseconds()/100);
  if(min<=9)(min='0'+min.toString());
  if(sec<=9)(sec='0'+sec.toString());
  return `${min}:${sec}.${mil}`;
}

/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/