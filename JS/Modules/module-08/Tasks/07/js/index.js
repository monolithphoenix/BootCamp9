// Module 08
/* Task 07
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const list = document.querySelectorAll('input')

function addListener(arg) {
  for (const el of arg) {
    el.addEventListener('blur', checkInput);
  };
}

function checkInput() {
  for (const el of list) {
    if (el.value.length === Number(el.dataset.length)) {
      el.classList.remove('invalid');
      el.classList.add('valid');
    } else {
      el.classList.remove('valid');
      el.classList.add('invalid');
    };
  };
}

addListener(list)
