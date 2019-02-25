"use strict"

const stopwatch = document.querySelector(".stopwatch");
const clockface = document.querySelector(".js-time");
const lapsList = document.querySelector(".js-laps");

const startBtn = document.querySelector(".js-start");
const lapBtn = document.querySelector(".js-take-lap");
const resetBtn = document.querySelector(".js-reset");
const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

// Слушатели
startBtn.addEventListener('click', startPauseTimer);
lapBtn.addEventListener('click', getCurentTimerValue);
resetBtn.addEventListener('click', resetTimer);
stopwatch.addEventListener('click', changeButtonColor);

// Сброс таймера
function resetTimer() {
    stopTimer();
    timer.startTime = 0;
    timer.deltaTime = 0;
    startBtn.innerText = 'Start';
    lapsList.innerHTML = '';
    updateClockface(clockface, timer.deltaTime);
};

// Фиксируем и вставляем значение таймера по нажатию на кнопку LAP
function getCurentTimerValue() {
  let curentTimerValue = timer.deltaTime;
  lapsList.innerHTML += `<li>${getFormattedTime(curentTimerValue)}</li>`;
};

// Запуск таймера
function startPauseTimer() {
  const STARTTIME = Date.now();
  if (startBtn.textContent === 'Start') {
    startBtn.innerText = 'Pause';
    timer.id = setInterval(() => {
      let newTime = Date.now();
      timer.deltaTime = newTime-STARTTIME;
      updateClockface(clockface, timer.deltaTime);
    }, 100)
    return;
  };
  if (startBtn.textContent === 'Pause') {
    startBtn.innerText = 'Continue';
    return stopTimer();
  };
  if (startBtn.textContent === 'Continue') {
    startBtn.innerText = 'Pause';
    timer.id = setInterval(() => {
      let newTime = Date.now();
      timer.deltaTime = newTime-STARTTIME+timer.startTime;
      updateClockface(clockface, timer.deltaTime);
    }, 100)
  }
};

// Записываем текущее значение таймера и останавливаем setInterval
function stopTimer() {
  timer.startTime = timer.deltaTime;
  clearInterval(timer.id);
};

// Вставка значения таймера в HTML
function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
};

// Подсветка активной кнопки на 0.5 сек
function changeButtonColor(e) {
  if (e.target.nodeName === 'BUTTON') {
    startBtn.classList.remove('active');
    lapBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    e.target.classList.add('active');
    setTimeout(() => e.target.classList.remove('active'), 500)
  }
};

// Преобразователь времени
function getFormattedTime(time) {
  let date = new Date(time);
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mil = Math.floor(date.getMilliseconds()/100);
  if(min<=9)(min='0'+min.toString());
  if(sec<=9)(sec='0'+sec.toString());
  return `${min}:${sec}.${mil}`;
};


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