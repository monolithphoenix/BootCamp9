// Module 08
/* Task 08
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/
const input = document.querySelector('.input');
input.addEventListener('focus', addMessage);
input.addEventListener('blur', delMessage);
input.addEventListener('input', pushMessage);


function addMessage() {
    // console.log(input.previousElementSibling);
    input.previousElementSibling.textContent = 'Input is in focus!';
    input.previousElementSibling.classList.toggle('glow');
}

function delMessage() {
  // console.log(input.previousElementSibling);
  input.previousElementSibling.textContent = '';
  input.previousElementSibling.classList.toggle('glow');
}

function pushMessage() {
  // console.log(input.nextElementSibling);
  input.nextElementSibling.textContent = `Current input value: ${input.value}`;
}