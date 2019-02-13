// Module 10
/* Task 03
  Документация API: https://jsonplaceholder.typicode.com/

  Просмотр всех пользователей: https://jsonplaceholder.typicode.com/users/ 

  Написать функцию fetchUsers, которая посылает get запрос.
  Результатом fetch будет массив объектов.
  
  В таблицу .user-table добавить строки для каждого пользователя.
  Каждая строка состоит из 5-ти столбцов указанного формата.
  Кол-во строк будет такое как и кол-во объектов пользователей в ответе.
  
    Имя | Почта | Город | Вебсайт | Компания
    Имя | Почта | Город | Вебсайт | Компания
    и так далее для каждого пользователя...
*/
const URL = 'https://jsonplaceholder.typicode.com/users/';
const form = document.querySelector(".search-form");
const userTable = document.querySelector(".users-table");
let count = 0;

form.addEventListener("submit", fetchUsers);
/*
  @param {FormEvent} evt
*/
function fetchUsers(evt) {
  evt.preventDefault();
  fetch(URL)
    .then(res => res.json())
    .then(data => pushToTable(data))
    .catch(err => console.log(err))
};
function pushToTable(arr) {
  if (!count) {
    userTable.innerHTML += `
    <tr>
      <th>Имя</td>
      <th>Почта</td>
      <th>Город</td>
      <th>Вебсайт</td>
      <th>Компания</td>
    </tr>
    `;
    for (let i = 0; i < arr.length; i++) {
      userTable.innerHTML += `
      <tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].email}</td>
        <td>${arr[i].address.city}</td>
        <td>${arr[i].website}</td>
        <td>${arr[i].company.name}</td>
      </tr>
      `    
    };
  }
  count++;
}