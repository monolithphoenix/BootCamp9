/* Task 02 M05
  Напишите функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];
  
const getPropValues = (arr, prop) => arr.map(obj =>  obj[prop] );

  // Вызовы функции для проверки
  console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
  console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
  console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
  