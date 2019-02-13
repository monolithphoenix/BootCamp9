// Module 10
/* Task 01
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");
const API_URL = "https://restcountries.eu/rest/v2/name/";

form.addEventListener("submit", fetchCountryData);

/*
  @param {FormEvent} evt
*/

function fetchCountryData(evt) {
  evt.preventDefault();
  const askAPI = API_URL+input.value;
  console.log(askAPI);
  fetch(askAPI)
    .then(res => res.json())
    .then(data => getData(data))
    .catch(err => console.log(err));
}

function getData(data) {
  const resultData = data[0];
  console.log(resultData);
  result.innerHTML = `
    <ul style='list-style:none'>
      <li><p>Country name: ${resultData.name}, ${resultData.nativeName}</p></li>
      <li><p>Capital: ${resultData.capital}</p></li>
      <li><p>Main currency:  ${resultData.currencies[0].name}, ${resultData.currencies[0].code}</p></li>
      <li><p>Flag:</p><p><img src=${resultData.flag} alt='flag' width='320'></p></li>`    
}