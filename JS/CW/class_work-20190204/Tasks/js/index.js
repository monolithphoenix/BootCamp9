// Отримати масив валют з сайта НБУ 
// Силка для запиту 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
// Вивести інформацію на екран в форматі списка. Пункт списку має мати 3 спана:
// Спан №1 показує текстову назву валюти
// Спан №2 показує курс
// Спан №3 показує позначку валюти (наприклад USD)
// Створити на екрані 3 кнопки та інпут.
// 1)Кнопка №1 сортує від дорожчого до дешевшого
// 2)Кнопка №2 сортує від дешевшого до дорощого
// 3)Кнопка №3 сортує по алфавіту
// 4)В інпут вводимо назву валюти текст або cc і отримуємо курс конкретної валюти. 
const NBU = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

const btnSortUp = document.createElement('button');
const btnSortDown = document.createElement('button');
const btnSortABC = document.createElement('button');
const input = document.createElement('input');

const list = document.createElement('ul');

function fetchData(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => createList(data))
        .catch(err => console.log(err))
};

function createList(arr) {
    console.log(arr);
    
    const string = arr.reduce((acc, el) => acc + `<li><span>${el.txt}</span><span>${el.rate}</span><span>${el.cc}</span></li>`, '');
    root.innerHTML = `<ul>${string}</ul>`;
}

fetchData(NBU);