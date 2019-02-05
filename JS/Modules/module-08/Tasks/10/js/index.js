// Module 08
/* Task 10
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

const menu = document.querySelector('.js-menu')
menu.addEventListener('click', toggleClass);
// console.log(menu.children[0]);

function toggleClass() {
  // console.log(event);
  if (event.target !== menu) {
    for (const el of menu.children) {el.firstElementChild.classList.remove('active')};
    event.target.classList.add('active');  
  }
}