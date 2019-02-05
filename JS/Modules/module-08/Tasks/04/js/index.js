// Module 07
/* Task 04
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/

const FORM = document.querySelector('.question-form');
const PARA = document.querySelector('.result')
const PARATEXT = PARA.textContent;
// console.log(PARATEXT);

FORM.addEventListener('submit', action);

function action(){
  event.preventDefault();
  for (const el of FORM) {
    if (el.checked) {
      PARA.textContent = PARATEXT + (el.parentNode.textContent).trim()
    };
  }
    // console.log(form[0].checked);
    // console.log(form[1].checked);
    // console.log(form[2].checked);
    // console.log(form[3].checked);
  FORM.reset();
}

// console.log(Array.from(form.children))

// console.log(form[0].checked);
// console.log(form[1].checked);
// console.log(form[2].checked);
// console.log(form[3].checked);

// console.log(para.textContent += 'JS');
 