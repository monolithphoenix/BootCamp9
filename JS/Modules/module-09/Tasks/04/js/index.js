// Module 09
/* Task 04
  Напишите скрипт работы магазина со складом товаров.
  
  Есть переменная goodsAmount хранящиая в себе
  текущее количество единиц какого-то товара на складе.
  
  Напишите функцию processOrder(amount), получающую
  кол-во товаров заказанных покупателем, и возвращающую промис.
  
  Для имитации проверки достаточного количества товаров
  на складе используйте setTimeout с delay 500мс.
  
  Если на складе товаров больше либо равно заказанному
  количеству, "верните" строку - "Ваш заказ готов!".
  
  В противном случае - "К сожалению на складе не достаточно товаров!".
  
  Если же пользователь ввел не число, то выдайте ошибку throw new Error("Некорректный ввод!")  
*/

const DELAY = 1000;

let goodsAmount = 100;

function processOrder(amount) {
  if (typeof amount !== 'number') {
    return err = 'Некоректный ввод!';
  } else if (amount <= goodsAmount) {
    return result = 'Ваш заказ готов!';
  } else {
    return result = 'К сожалению на складе не достаточно товаров!';
  };
}

// Вызовы функции для проверки
processOrder(50)
  .then(result => console.log(result)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(50)
  .then(result => console.log(result)) // Ваш заказ готов!
  .catch(err => console.log(err));

processOrder(500)
  .then(result => console.log(result)) // К сожалению на складе недостаточно товаров!
  .catch(err => console.log(err));

processOrder("qwe")
  .then(result => console.log(result))
  .catch(err => console.log(err)); // Некоректный ввод!
