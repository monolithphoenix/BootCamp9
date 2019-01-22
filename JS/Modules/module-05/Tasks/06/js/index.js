/* Task 06
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];
  
// V1
//   function getAllPropValues(arr, prop) {
//     result = [];
//     for (let obj of arr) {
//         for (let key in obj) {
//             if (key === prop) {
//                 result.push(obj[key]);
//             };
//         };
//     };
//     return result;
//   };

// V2
// function getAllPropValues(arr, prop) {
//     result = [];
//     for (let obj of arr) {
//         if (obj.hasOwnProperty(prop)) {
//             result.push(obj[prop]);
//         };
//     };
//     return result;
//   };

// V3
function getAllPropValues(arr, prop) {
    result = [];
    for (let obj of arr) {
        if (obj.hasOwnProperty(prop))
            result.push(obj[prop]);
    };
    return result;
  };

  // Вызовы функции для проверки
  console.log(
    getAllPropValues(users, 'name')
  ); // ['Poly', 'Mango', 'Ajax']
  
  console.log(
    getAllPropValues(users, 'mood')
  ); // ['happy', 'blissful', 'tired']
  
  console.log(
    getAllPropValues(users, 'active')
  ); // []