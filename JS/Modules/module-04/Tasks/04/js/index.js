/* Task 04 M04

  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// V1
// function isObjectEmpty(obj) {
//     let count = 0;
//     for (let key in obj) {
//         count++
//     };
//     if (count === 0) {
//         return true;
//     } else {
//         return false;
//     };
// };

// V2
// function isObjectEmpty(obj) {
//     return Object.keys(obj).length === 0;
// };

// V3
let isObjectEmpty = obj => Object.keys(obj).length === 0;

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
  ); // true
  
  console.log(
    isObjectEmpty({a: 1})
  ); // false
  
  console.log(
    isObjectEmpty({a: 1, b: 2})
  ); // false
  