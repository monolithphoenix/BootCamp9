/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
"use strict"
const URL = 'https://test-users-api.herokuapp.com/users/';
const form = document.querySelector(".search-form");
const UserTable = document.querySelector(".users-table");
const UserName = document.getElementById('name');
const UserAge = document.getElementById('age');
const UserID = document.getElementById('id');

const ButtonAddUser = document.getElementById('add');
const ButtonShowAllUsers = document.getElementById('get');
const ButtonFindUser = document.getElementById('find');

ButtonAddUser.addEventListener('click', addUser);
ButtonShowAllUsers.addEventListener('click', getAllUsers);
ButtonFindUser.addEventListener('click', getUserById);
UserTable.addEventListener('click', removeUser);

function getAllUsers(event) {
  event.preventDefault();
    console.log('getAllUsers working now');
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      UserTable.innerHTML =
        `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>ID</th>
        <th></th>
        </tr>`;
      for (const el of data.data) {
        UserTable.innerHTML +=
          `<tr>
          <td>${el.name}</td>
          <td>${el.age}</td>
          <td>${el.id}</td>
          <td class='del'>DEL</td>
          </tr>`
      };
    })
    .catch(err => console.log(err))
}

function getUserById(event) {
  event.preventDefault();
    console.log('getUserById working now');
    console.log(event.ta);
  

  if (!UserID.value) {return console.log('empty field')};

  fetch((URL + UserID.value))
    .then(res => res.json())
    .then(data => {
      UserTable.innerHTML =
        `<tr>
        <th>Name</th>
        <th>Age</th>
        <th>ID</th>
        <th></th>
        </tr>`;
      UserTable.innerHTML +=
        `<tr>
        <td>${data.data.name}</td>
        <td>${data.data.age}</td>
        <td>${data.data.id}</td>
        <td></td>
        </tr>`;
        new Audio('./audio/DemonicLaughter4.mp3').play();
    })
    .catch(err => console.log(err))
}

function addUser(event) {
  event.preventDefault();
  
  if (UserName.hidden) {
    if (UserAge.hidden) {UserAge.hidden=false};
    return UserName.hidden=false
  };

  if (!UserAge.value) {
    if (!UserName.value) {console.log('empty Name field')};
    return console.log('empty Age field')
  };

    console.log('push data to server');


  // fetch(URL, {
  //   method: 'POST',
  //   body: JSON.stringify({ name: UserName.value, age: Number(UserAge.value) }),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }
  // });
  // UserTable.innerHTML +=
  //   `<tr>
  //     <td>${UserName.value}</td>
  //     <td>${UserAge.value}</td>
  //     <td></td>
  //     <td></td>
  //   </tr>` 
  if (!UserName.hidden) {return UserName.hidden=true};
}

function removeUser(event) {
      console.log('removeUser working now');
      console.log(event);
      console.log(event.target);
      console.log(event.target.classList.contains('del'));
    if (event.target.classList.contains('del')) {
        console.log(event.target.parentNode);
      event.target.style = 'background-color: transparent;'
      event.target.innerText = '<-----';
      new Audio('./audio/NOOO.mp3').play();
      
      const tableRow = event.target.parentNode.parentNode;
      tableRow.classList.add('out-right');
      setTimeout(() => {
        tableRow.parentNode.removeChild(tableRow);      
      }, 1500);
    }
  
  // fetch('https://test-users-api.herokuapp.com/users', {
  //   method: 'DELETE',
  //   body: JSON.stringify({ name: "NEW", age: 12}),
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }
  // });
}
function updateUser(id, user) {}