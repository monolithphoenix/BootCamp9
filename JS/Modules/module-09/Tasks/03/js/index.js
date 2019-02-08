// Module 09
/* Task 03 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);

function startTimer() {
  const STARTTIME = Date.now();
  
  ID = setInterval(() => {
    let newTime = Date.now();
    let diferense = newTime-STARTTIME;
    console.log(diferense);
    
    updateClockface(clockface, diferense);
  }, 100);
};
function stopTimer() {
  clearInterval(ID);
}
const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

/*
* Вспомогательные функции
*/

/*
* Обновляет поле счетчика новым значением при вызове
* аргумент time это кол-во миллисекунд
*/
function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

/*
* Подсветка активной кнопки
*/
function setActiveBtn(target) {
  if(target.classList.contains('active')) {return;};
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
function getFormattedTime(time) {
  let date = new Date(time);
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mil = Math.floor(date.getMilliseconds()/100);
  if(min<=9)(min='0'+min.toString());
  if(sec<=9)(sec='0'+sec.toString());
  return `${min}:${sec}.${mil}`;
}