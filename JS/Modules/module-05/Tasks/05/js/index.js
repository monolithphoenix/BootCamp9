/* Task 05
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// V1
// function countTotalSalary(salaries) {
//     let selArr = Object.values(salaries);
//     let total = 0;
//     for (let el of selArr) {
//         total += el;
//     };
//     return total;
// };

// V2
function countTotalSalary(salaries) {
    let total = 0;
    for (let key in salaries) {
        total += salaries[key];
    };
    return total;
};

// Вызовы функции для проверки
console.log(
    countTotalSalary({})
  ); // 0
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  ); // 330
  
  
