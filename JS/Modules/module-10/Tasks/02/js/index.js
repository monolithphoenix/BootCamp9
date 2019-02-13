// Module 10
/* Task 02
  Написать функцию fetchUserData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://api.github.com/users/";

form.addEventListener("submit", fetchUserData);

/*
  @param {FormEvent} evt
*/
function fetchUserData(evt) {
  evt.preventDefault();
  const askAPI = API_URL+input.value;
  console.log(askAPI);
  fetch(askAPI)
    .then(res => res.json())
    .then(data => getData(data))
    .catch(err => console.log(err));
}

function getData(data) {
  const resultData = data;
  console.log(resultData);
  result.innerHTML = `
    <ul style='list-style:none'>
      <li><p>Avatar: <img src=${resultData.avatar_url} alt='avatar' width='60'></p></li>
      <li><p>Username: ${resultData.login}</p></li>
      <li><p>Bio: ${resultData.bio}</p></li>
      <li><p>Public repos: ${resultData.public_repos}</p></li>`    
}
