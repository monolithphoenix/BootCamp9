    // let animal = {
    //     canEat: true,
    //     canJump: true,

    // };

    // let dog = Object.create(animal);
    // dog.canBark = true;
    // dog.canSwim = true;

    // console.log(dog);

// Типа прототипируем:

    //             // sizes
    //             const BIG = {
    //             price: 80,
    //             callories: 150
    //             };
    //             const SMALL = {
    //             price: 50,
    //             callories: 100,
    //             };
                
    //             // topings
    //             const MEAT = {
    //             name: 'meat',
    //             price: 20,
    //             callories: 85
    //             };
    //             const CHEESE = {
    //             name: 'cheese',
    //             price: 15,
    //             callories: 50
    //             };
    //             const SALAT = {
    //             name: 'salat',
    //             price: 12,
    //             callories: 5
    //             };
    //             const CORN = {
    //             name: 'corn',
    //             price: 10,
    //             callories: 5
    //             };
                
    //             // souces
    //             const SOUSE = {
    //             name: 'souce',
    //             price: 8,
    //             callories: 30
    //             };
    //             const MUSTARD = {
    //             name: 'mustard',
    //             price: 13,
    //             callories:10
    //             };
    //             const KETCHUP = {
    //             name: 'ketchup',
    //             price: 8,
    //             callories: 7
    //             };

    // function Pizza (name, size) {
    //     this.name = name;
    //     this.size = size;
    //     this.toppings = [];
    //     this.souces = [];
    // }

    // Pizza.prototype.addToppings = function(toping) {
    //     if (!this.toppings.includes(toping)) {
    //         this.toppings.push(toping);
    //     }
    // }

    // Pizza.prototype.deleteToppings = function(toping) {
    //     if (this.toppings.includes(toping)) {
    //         this.topping = this.toppings.filter(el => el !== toping)
    //     }
    //     return
    // }

    // Pizza.prototype.addSouces = function(souce) {
    //     if (!this.souces.includes(souce)) {
    //         this.souces.push(souce);
    //     }
    // }

    // Pizza.prototype.totalPrice = function() {
    //     let size = this.size.price;
    //     let toppings = this.toppings.reduce((acc, el) => acc + el.price, 0);
    //     let souces = this.souces.reduce((acc, el) => acc + el.price, 0);
    //     let sum = size + toppings + souces;
    //     return sum;
    // }

    // Pizza.prototype.deleteSouces = function(souce) {
    //     if (this.souces.includes(souce)) {
    //         this.souces = this.toppings.filter(el => el !== souce)
    //     }
    //     return;
    // }



    // let order = new Pizza ('margarita', BIG);
    // order.addToppings(MEAT);
    // order.addToppings(MEAT);
    // order.addToppings(SALAT);
    // order.addSouces(MUSTARD);
    // order.addSouces(MEAT);
    // console.log(order.totalPrice());
    
    // console.log(order);
    
// Калькулятор с использованием прототипирования

    // function Calculator () {
    //     this.data = [];

    // }

    // Calculator.prototype.read = function() {
    //     do {
    //         input = prompt();
    //         if (input !== null) {
    //             this.data.push (Number(input));
    //         };
    //     } while (input !== null)
    // }

    // Calculator.prototype.sum = function() {
    //     return this.data.reduce((acc, el) => acc + el, 0)
    // }

    // Calculator.prototype.addMethod = function(name, code) {
    //     // Calculator.prototype.name =
    // }


    // let calculator = new Calculator();

    // calculator.read()

    // console.log(calculator);
    // console.log(calculator.sum());
    // console.log(calculator.sub());





    // Написати конструктор обєкта Account який буде описувати рахунок користувача.
    // Обєкт має мати такі унікальні ключі:
    // 1) Імя юзера
    // 2) id юзера
    // 3) ключ balance
    // 4) ключ credits // список кредитів
    // 5) ключ deposits // список депозитів
    // 6) ключ depositIncome // загальний прибуток від депозитів
    // 7) ключ creditCosts // загальні затрати по кредитах
    // 8) ключ charity // сума яку виділили на благодійність
    
    function Account (name, id) {
        this.name = name;
        this.id = id;
        this.balance = 0;
        this.credit = [];
        this.deposit = [];
        this.depositIncome = 0;
        this.creditCosts = 0;
        this.charity = 0;
            this.countDepositsIncome = function (sum) {
                // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
                return balance = balance + 15;
            };
            this.openDeposit = function () {
                //метод що додає депозит в список deposits і запускає метод countDepositsIncome
                return this.balance = this.balance + 15;
            };
            this.countCreditCost = function () {
                //метод що приймає суму кредиту і його тип та збільшує поле creditCosts
            };
            this.openCredit = function () {};
            this.showIncome = function () {};
            this.showCost = function () {};
            this.showProfit = function () {};
            this.getCash = function () {};
            this.addition = function () {};
            this.closeCredit = function () {};
            this.closeDeposit = function () {};
    };

    // Також мають бути такі методи
    // 1) countDepositsIncome // метод що приймає суму депозита і та збільшує поле depositIncome в задежності від типу і ставки і періоду депозиту.
    // 2) openDeposit // метод що додає депозит в список deposits і запускає метод countDepositsIncome
    // 3) countCreditCost  // метод що приймає суму кредиту і його тип та збільшує поле creditCosts
    // 4) openCredit // метод що додає кредит в список credits і запускає метод countCreditCost
    // 5) showIncome // метод що показує загальний дохід від депозитів
    // 6) showCost // метод що показує загальні затрати на кредити
    // 7) showProfit //метод що показує прибуток (різниця доходів і витрат)
    // 8) getCash //метод що приймає число і зменьшує баланс юзера так як він знімає готівку з рахкнку
    // 9) addition // метод що приймає число і збільшує баланс юзера (поповнення через термінал)
    // 10) closeCredit метод що закриває кредит в банку і видаляє його з поля credits та забирає суму з creditCosts
    // 11) closeDeposit метод що закриває депозит в банку і видаляє його з поля deposits та забирає суму з depositIncome
    
    // simple deposit formula
        // = amount * (percent / 12) * periodInMonth
    // compound deposit formula
        // = amount*(1 + percent / year)(year*periodInYears)

    // Блок подключения объектов функции Account 
        // Account.prototype.countDepositsIncome () {};
        // Account.prototype.openDeposit () {};
        // Account.prototype.countCreditCost () {};
        // Account.prototype.openCredit () {};
        // Account.prototype.showIncome () {};
        // Account.prototype.showCost () {};
        // Account.prototype.showProfit () {};
        // Account.prototype.getCash () {};
        // Account.prototype.addition () {};
        // Account.prototype.closeCredit () {};
        // Account.prototype.closeDeposit () {};


    // // Зразок обєкта депозита
    const deposit = {
        amount: 5000,
        type: '', // типи депозиту 'simple', 'compound'
        percent: '10%',
        period: 1 // період вказуємо в місяцях
    }
    
    // // зразок обєкта кредиту
    const credit = {
        amount: 500000,
        type: '', // типи кредиту 'annuity', 'simple'
        percent: '5%',
        period: 15 // період вказуємо в роках
    }
    
   
    let firstUserDep = new Account('Albert', 1487);
    firstUserDep.countDepositsIncome;
    console.log(Account);
    console.log(firstUserDep);
    console.log(firstUserDep.balance);

    
    
         
    
    // simple deposit formula https://www.rapidtables.com/calc/finance/simple-interest-calculation.html 
    
    // compound deposit formula https://www.rapidtables.com/calc/finance/compound-interest-formula.html
    
    // annuity credit formula
    // Дивитися Приклад 4.
    // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC
    
    // simple credit formula
    // Дивитися Приклад 3.
    // https://uk.wikibooks.org/wiki/%D0%A4%D1%96%D0%BD%D0%B0%D0%BD%D1%81%D0%B8/%D0%9E%D0%B1%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F_%D0%B2%D1%96%D0%B4%D1%81%D0%BE%D1%82%D0%BA%D1%96%D0%B2_%D0%B7%D0%B0_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%BE%D0%BC_%D0%B0%D0%B1%D0%BE_%D0%B4%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D0%BC