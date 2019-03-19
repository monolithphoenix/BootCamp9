/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  + функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  + функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  + функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  + функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  + функция updateUser(id, user) - должна обновлять данные пользователя по id. 
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
const ButtonUpdateUserInfo = document.getElementById('update');

ButtonAddUser.addEventListener('click', addUser);
ButtonShowAllUsers.addEventListener('click', getAllUsers);
ButtonFindUser.addEventListener('click', getUserById);
ButtonUpdateUserInfo.addEventListener('click', updateUser);
UserTable.addEventListener('click', removeUser);

function getAllUsers(event) {
  event.preventDefault();
    console.log('getAllUsers working now');
  if (!UserName.hidden) {UserName.hidden=true};
  if (!UserAge.hidden) {UserAge.hidden=true};
  if (!UserID.hidden) {UserID.hidden=true};

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
          <td class='del'>DELETE</td>
          </tr>`
      };
    })
    .catch(err => console.log(err))
}

function getUserById(event) {
  event.preventDefault();
    console.log('getUserById working now');
  if (!UserName.hidden) {UserName.hidden=true};
  if (!UserAge.hidden) {UserAge.hidden=true};
  if (UserID.hidden) {return UserID.hidden=false};
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
        <td class='del'>DELETE</td>
        </tr>`;
        new Audio('./audio/DemonicLaughter4.mp3').play();
    })
    .catch(err => console.log(err))

  new Audio('.audio/NFF-good-tip-high.wav').play();

  clearInputs();
}

function addUser(event) {
  event.preventDefault();
    console.log('addUser working now');
  if (UserName.hidden) {
    if (UserAge.hidden) {
      if(!UserID.hidden) {UserID.hidden=true};
      UserAge.hidden=false
    };
    return UserName.hidden=false;
  };
  if (!UserAge.value) {
    if (!UserName.value) {console.log('empty Name field')};
    return console.log('empty Age field')
  };

  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({ name: UserName.value, age: Number(UserAge.value) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  new Audio('./audio/dota_2_pudge_fresh_meat-namobilu.com.mp3').play();

  UserTable.innerHTML +=
    `<tr>
      <td>${UserName.value}</td>
      <td>${UserAge.value}</td>
      <td></td>
      <td class='new'>New user</td>
    </tr>` 

  if (!UserName.hidden) {
    if (!UserAge.hidden) {UserAge.hidden=true};
    UserName.hidden=true;
  };


  clearInputs();
}

function updateUser(event) {
  event.preventDefault();
    console.log('updateUser working now');
  if (UserName.hidden) {UserName.hidden=false};
  if (UserAge.hidden) {UserAge.hidden=false};
  if (UserID.hidden) {return UserID.hidden=false};
  if (!UserName.value && !UserAge.value && !UserID.value) {return console.log('empty field')};

  const user = {
    name: UserName.value,
    age: UserAge.value,
    id: UserID.value,
  };

  fetch(URL+user.id, {
    method: 'PUT',
    body: JSON.stringify({ name: user.name, age: user.age }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

  clearInputs();

  setTimeout(() => {
    new Audio('./audio/NFF-choice-good.wav').play();
    getAllUsers(event);
  }, 500);
}

function removeUser(event) {
    console.log('removeUser working now');
  const userID = event.target.previousElementSibling.innerText;

  if (event.target.classList.contains('del')) {
      // console.log(event.target.parentNode);
    event.target.style = 'background-color: transparent;'
    event.target.innerText = '<-----';
    new Audio('./audio/NOOO.mp3').play();
    
    const tableRow = event.target.parentNode.parentNode;
    tableRow.classList.add('out-right');
    setTimeout(() => {
      tableRow.parentNode.removeChild(tableRow);      
    }, 1500);
  }
  
  fetch(URL+userID, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });
}

function clearInputs() {
  UserName.value = "";
  UserAge.value = "";
  UserID.value = "";
}