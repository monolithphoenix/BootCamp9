// #1
/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, необходимо передать 
  как аргументы при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/
function User(name = 'User', isActive = false, age = 0, friends = 0) {
    this.name = name;
    this.isActive = isActive;
    this.age = age;
    this.friends = friends;
    this.getUserInfo = function () {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`);
    };
};

const user1 = new User('Alfred', true, 37, 5);
const user2 = new User('James', false, 33, 3);
const user3 = new User('Rachel', true, 19, 8);


user1.getUserInfo();
user2.getUserInfo();
user3.getUserInfo();


//#2
/*  
  Расставьте отсутствующие this в методах объекта store
*/

const store = {
  products: ['bread', 'cheese', 'milk', 'apples'],
  managers: ['poly', 'mango', 'ajax'],
  addManager(manager) {
    this.managers.push(manager);
    
    console.log(this.managers);
  },
  removeManager(manager) {
    const idx = this.managers.indexOf(manager);
    
    this.managers.splice(idx, 1);
    
    console.log(this.managers);
  },
  getProducts() {
    console.log(this.products);
    
    return this.products;
  }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']

//#3
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account(login, password, type = "regular") {
  this.login = login;
  this.password = password;
  this.type = type;

  this.changePassword = function(newPassword) {
    this.password = newPassword;

    console.log(this.password);
  };

  this.getAccountInfo = function() {
    console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc"); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

/*
Написать ф-ю конструктор Pizza который создает объeкты пиццы.
Объект должен иметь такие поля:
1) Название пиццы // через параметр
2) Размер пиццы // через параметр
3) набор начинок // масив
4) набор соусов // масив
5) метод totalPrice который возвращает цену пиццы // размер + начинки + соусы
6) метод totalCallories который возвращает суму калорий пиццы // размер + начинки + соусы
7) метод addToppings котрый принимает обект начинки и добавляет его в масив начинок если ее нету
8) метод addSouces котрый принимает обект соуса и добавляет его а масив соусов если его нету
9) метод deleteToppings который удаляет начинку из масива если она там есть
10) метод deleteSouses который удаляет соус из масива если он там есть
Размеры,(sizes) начинки,(topings) соусы (souces) это обекты. 
*/

function Pizza (name, sizes) {
    this.name = name;
    this.sizes = sizes;
    this.topings = [];
    this.souces = [];

    this.totalPrice = function() {
        // console.log(this.sizes.price);
        // console.log(this.topings.reduce((acc, val) => acc + val.price, 0));
        // console.log(this.souces.reduce((acc, val) => acc + val.price, 0));

        console.log(this.sizes.price
            + this.topings.reduce((acc, val) => acc + val.price, 0)
            + this.souces.reduce((acc, val) => acc + val.price, 0)
            );
    };

    this.totalCallories = function() {
        // console.log(this.sizes.callories);
        // console.log(this.topings.reduce((acc, val) => acc + val.callories, 0));
        // console.log(this.souces.reduce((acc, val) => acc + val.callories, 0));
        console.log(this.sizes.callories
            + this.topings.reduce((acc, val) => acc + val.callories, 0)
            + this.souces.reduce((acc, val) => acc + val.callories, 0)
            );
    };

    this.addToppings = function(obj) {
        this.topings.includes(obj) ? this.topings : this.topings.push(obj);
    };

    this.addSouces = function(obj) {
        this.souces.includes(obj) ? this.souces : this.souces.push(obj);
    };

    this.deleteToppings = function(obj) {
        this.topings.find(obj).splice();
    };

    this.deleteSouses = function() {

    };
};

// sizes
const BIG = {
price: 80,
callories: 150
};
const SMALL = {
price: 50,
callories: 100,
};

// topings
const MEAT = {
name: 'meat',
price: 20,
callories: 85
};
const CHEESE = {
name: 'cheese',
price: 15,
callories: 50
};
const SALAT = {
name: 'salat',
price: 12,
callories: 5
};
const CORN = {
name: 'corn',
price: 10,
callories: 5
};

// souces
const SOUSE = {
name: 'souce',
price: 8,
callories: 30
};
const MUSTARD = {
name: 'mustard',
price: 13,
callories:10
};
const KETCHUP = {
name: 'ketchup',
price: 8,
callories: 7
};

/*
Создать 2 разных пицы большую и маленькую. Для каждой из них добавить по одной начинке и соус. Потом вывести цену и калории.
Дальше добавить еще по одному соусу и 2 начинки.
Потом удалить одну начинку и вывести цену и калории новой пицы
*/

const pizza1 = new Pizza('FourCheeses', BIG);
console.log(pizza1);

pizza1.addToppings(CHEESE);
pizza1.addToppings(CHEESE);
pizza1.addToppings(CORN);
// pizza1.addSouces(SOUSE);

pizza1.totalPrice();
pizza1.totalCallories();




