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

const root = document.querySelector('#root');
const button = document.querySelector('button');

const sortBlock = document.createElement('div');
const list = document.createElement('ul');
const input = document.createElement('input');
const btnSortUp = document.createElement('button');
const btnSortDown = document.createElement('button');
const btnSortABC = document.createElement('button');

root.appendChild(sortBlock);
root.appendChild(list);
sortBlock.appendChild(input).setAttribute('placeholder','Enter currency name...');
sortBlock.appendChild(btnSortUp).textContent = 'Sort by rate ▲';
sortBlock.appendChild(btnSortDown).textContent = 'Sort by rate ▼';
sortBlock.appendChild(btnSortABC).textContent = 'Sort by ABC';

function fetchData(link, sortRule) {
    fetch(link)
        .then(res => res.json())
        .then(data => createList(data))
        .catch(err => console.log(err))
};
fetchData(NBU);

function createList(arr) {
    const string = arr.reduce((acc, el) => acc + `<li><span>${el.txt}</span><span>${el.rate}</span><span>${el.cc}</span></li>`, '');
    
    list.innerHTML = string;
}


// input.addEventListener('submit', filterInput);
// button.addEventListener('click', gerSort);

// function gerSort(e) {
//     e.preventDefault();
//     e.target.value
// }
// function filterInput(e) {
//     e.preventDefault();
// };

// .sort((a, b) => b.rate - a.rate)