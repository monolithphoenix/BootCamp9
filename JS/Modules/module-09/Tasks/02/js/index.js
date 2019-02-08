// Module 09
/* Task 02
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time) {
  let date = new Date(time);
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mil = Math.floor(date.getMilliseconds()/100);
  if(min<=9)(min='0'+min.toString());
  if(sec<=9)(sec='0'+sec.toString());

  return `${min}:${sec}.${mil}`;
}

console.log(
  getFormattedTime(1523621052858)
); // 04:12.8

console.log(
  getFormattedTime(1523621161159)
); // 06:01.1

console.log(
  getFormattedTime(1523621244239)
); // 07:24.2 