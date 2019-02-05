// Module 08
/* Task 01
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const btn = document.querySelector('button');
btn.addEventListener('click', upCount);
function upCount() {
  ++btn.textContent;
}