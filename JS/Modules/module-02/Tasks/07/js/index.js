/* Task 07
  Напишите скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Приходите еще!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
  
  PS: используйте конструкцию if..else.
*/ 
let no = prompt('Введите произвольное целое число');

// Решение #1. Моё
  // no === null ? alert("Приходите еще!") :
  // Number.parseInt(no) === Number.parseFloat(no) ? alert("Спасибо!") :
  // alert('Необходимо было ввести целое число!');

// Решение #2. Моё, развёрнутое
  if (no === null) {
    alert("Приходите еще!");
  } else if (Number.parseInt(no) === Number.parseFloat(no)) {
    alert("Спасибо!");
  } else {
    alert('Необходимо было ввести целое число!');
  }


// no === null ? alert("Приходите еще!") :
// (Math.ceil(Number.parseFloat(no)) - (Number.parseFloat(no))) === 0 ? alert("Спасибо!") :
// alert('Необходимо было ввести целое число!');