// Module 10
/* Task 04
  Документация API: https://jsonplaceholder.typicode.com/

  Написать функцию getUserById, которая посылает запрос 
  на получение информации о пользоватеьте с id (число) введенным в input. 
  Не забывайте что значение input это строка.
 
  Объект что придет в ответе используйте для вывода информации
  о пользователе в элементе .result
  
  Если пользователя с таким идентификатором в базе данных нет,
  в элемент .result вывести строку "Ошибка! Пользователя с таким id не существует"
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");

form.addEventListener("submit", getUserById);

function getUserById(evt) {
  // ...
}
