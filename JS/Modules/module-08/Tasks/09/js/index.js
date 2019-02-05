// Module 08
/* Task 09
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const btn = document.querySelector('.btn');
const modal = document.querySelector('.js-modal-backdrop');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', showModal);
modal.addEventListener('click', showModal);

function showModal() {
  if (event.target === btn || event.target === modal || event.target === closeBtn) {modal.classList.toggle('modal-hidden')};
}