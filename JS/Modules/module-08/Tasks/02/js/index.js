// Module 07
/* Task 02
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/
const add = document.querySelector('button');

function getSum() {
  let sum = Array.from(document.querySelectorAll('input')).reduce((acc, val) => acc+Number(val.value),0);
  document.querySelector('.result').textContent = sum;
}

add.addEventListener('click', getSum);