/* Task 01 M04

  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

console.log(user);

// добавляет поле mood со значением 'happy'
user.mood = 'happy';
console.log(user);

// заменяет значение hobby на 'javascript'
user.hobby = 'javascript';
console.log(user);

// удаляет свойство premium
delete user.premium;
console.log(user);

// выводит содержимое объекта user в формате ключ:значение используя цикл for...in
console.log('Выводим содержимое объекта user в формате ключ:значение');
console.log('- используя цикл for...in:');

for (let key in user) {
      console.log(key + ':' + user[key]);
};

// выводит содержимое объекта user в формате ключ:значение используя Object.keys и for...of
console.log('- используя Object.keys и for...of:');

const keys = Object.keys(user);
for (let key of keys) {
  console.log(key + ':' + user[key]);
};

// выводит содержимое объекта user в формате ключ:значение используя Object.entries и for...of
console.log('- используя Object.entries и for...of:');

const objects = Object.entries(user);
for (let obj of objects) {
  console.log(obj[0] + ':' + obj[1]);
};