// Module 07
/* Task 05
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

const imgList = document.querySelector('.images');

imgList.addEventListener('click', targetClick);

function targetClick(event) {
  if (event.target.nodeName !== "IMG") return;
  alert(event.target.src);
  // console.log(event.target.src);
}