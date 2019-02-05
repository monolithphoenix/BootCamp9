// Module 08
/* Task 06
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

const LIST = document.querySelector('.list');
LIST.addEventListener('click', deleteTargetLi);
function deleteTargetLi(event) {
  if (event.target.nodeName !== 'BUTTON') {return}
  // console.log(event.target);
  // console.log(event.target.parentNode);
  event.target.parentNode.remove()
}