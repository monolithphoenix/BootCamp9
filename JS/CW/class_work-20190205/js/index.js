// localStorage.setItem('test', JSON.stringify([1,2,5,6,8])) //create
// let str = JSON.parse(localStorage.getItem('test')); // read
// localStorage.setItem('test', JSON.stringify(9)); // reWrite
// lotalStorage.removeItem('test'); // delete
// localStorage.clear() // clear

/* 
План:
    1. Получить данные (value)
    2. Записать полученные данные (obj)
    3. Применить стили
    4. После обновдения страницы стили не должны слетать
*/

const BODY = document.querySelector('body');
const FORM = document.querySelector('#form');
const SELECTORS = document.querySelectorAll('select');
// console.log(SELECTORS);

function readData(e) {
    e.preventDefault();
    let settings = {};
    SELECTORS.forEach(el => settings[el.name] = el.value)
    console.log(settings);
    localStorage.setItem('set', JSON.stringify(settings))
    changeStyle();
}

function changeStyle() {
    let obj = JSON.parse(localStorage.getItem('set'));
    if (!obj) {return}
    BODY.style.color = obj.color;
    BODY.style.fontSize = obj.fontSize + 'px';
    BODY.style.fontFamily = obj.fontFamily;
}

FORM.addEventListener('submit', readData);
window.addEventListener('DOMContentLoaded', changeStyle)