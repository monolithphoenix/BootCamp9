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
const URL = 'https://jsonplaceholder.typicode.com/users/'
const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");

form.addEventListener("submit", getUserById);

// function getUserById(evt) {
//   evt.preventDefault();
//   console.log(input.value);
//   fetch(URL+input.value)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }

function getUserById(evt) {
  evt.preventDefault();
  // console.log(input.value);
  fetch(URL+input.value)
    .then(res => res.ok ? res.json() : result.innerHTML = '<p style="text-align:center">Ошибка! Пользователя с таким id не существует</p>')
    .then(data => result.innerHTML = `
    <table class="users-table">
      <tr>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.address.city}</td>
        <td>${data.website}</td>
        <td>${data.company.name}</td>
      </tr>
    </table>`)
    .catch(err => console.log(err));
}