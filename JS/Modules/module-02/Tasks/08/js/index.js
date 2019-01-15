/* Task 08
  В переменную num записывается случайное число.
  
  Используя ветвления запишите в переменную type строку:  
    - "even" если num четное
    - "odd" если num не четное

  PS: попробуйте использовать тернарный оператор
*/

const num = Number.parseInt(Math.random() * 100);

let type = Number.parseInt(num / 2) === Number.parseFloat(num / 2) ? "EVEN" : "odd" //Моё решение

// let type = num%2 ? "ODD" : "even" //Решение Димы


console.log(`${num} is ${type}`);
