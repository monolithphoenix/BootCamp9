// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія можна двома способами:
// 7.1) event
// 7.2) this
// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter
let con = document.querySelector('.container');
let btn = document.querySelector('.btn');
console.log(btn);
console.log(btn.clientHeight);
console.log(btn.clientWidth);
console.log(window.innerWidth);




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// {
//     top: getRandomInt(btn.clientWidth, window.innerWidth)+"px",
//     left: getRandomInt(btn.clientHeight, window.innerHeight)+"px"
// }

let log = console.log('hello!');
con.addEventListener('mouseover', log)