// Module 06
/* Task 01
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount. 
  
  В prototype функции-конструктора добавить метод getAccountInfo(), 
  который выводит в консоль значения полей login, email и friendsCount. 
  
  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/
function Account (login, email, friendsCount) {
  this.login = login;
  this.email = email;
  this.friendsCount = friendsCount;
};
Account.prototype.getAccountInfo = function() {
    console.log(this.login, this.email, this.friendsCount);
};

let user1 = new Account ('Garold', 'garold@gmail.com', 6);
let user2 = new Account ('Freddy', 'fm@yahoo.com', 683);
let user3 = new Account ('Mark', 'maRkey@gmail.com', 7);

user1.getAccountInfo();
user2.getAccountInfo();
user3.getAccountInfo();