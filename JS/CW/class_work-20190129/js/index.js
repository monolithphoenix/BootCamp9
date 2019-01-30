// 1) Читаєм інформацію з інпутів (querySelector, value)
let form = document.querySelector('.form');
let price = document.querySelector('#price');
let quantity = document.querySelector('#quantity');
let total = document.querySelector('.total');
let amount = document.querySelector('.amount');

// 2) Перемножуємо данні з інпутів (function)
// 3) Відобразити на екрані результат пункта 2 (textContent)
// 4) Округлити до 2 знаків після коми (toFixed(2))
let multy = function() {
    let res = price.value * quantity.value;
    total.textContent = res.toFixed(2);
};

// 5) Перезаписуємо інформацію в синьому квадратику (value range, textContent)
let newAmount = function() {
    amount.textContent = quantity.value;
};

// 6) Вартість перезаписується при зміні будь-якого інпута (event - input and function п2)
form.addEventListener('input', multy);
form.addEventListener('input', newAmount);

// 7) Вартість розрахувати при завантаженні сторінки. (DOMContentLoad)
multy();
newAmount();

console.log(price);
console.log(quantity);
console.log(total);
console.log(amount);


// ----- Калькулятор -----
let startBtn = document.querySelector('.get-Value');
let sumBtn = document.querySelector('.sum');
let minBtn = document.querySelector('.minus');
let multBtn = document.querySelector('.mult');
let divBtn = document.querySelector('.divide');
let powBtn = document.querySelector('.pow');

class Calculator {
    constructor() {
        //  this = {}
        this.a = null;
        this.b = null;

        this.getValue = this.getValue.bind(this);
        this.sum = this.sum.bind(this);
        this.minus = this.minus.bind(this);
        this.mult = this.mult.bind(this);
        this.divide = this.divide.bind(this);
        this.pow = this.pow.bind(this);
    }

    getValue() {
        //  console.log(this);
        this.a = Number(prompt('Enter number'));
        this.b = Number(prompt('Enter number'));
        a.textContent = this.a;
        b.textContent = this.b;
    };

    sum() {
        //  console.log(this);
        sum.textContent = this.a + this.b;
    };

    minus() {
        minus.textContent = this.a - this.b;
    };

    mult() {
        mult.textContent = this.a * this.b;
    };

    divide() {
        divide.textContent = this.a / this.b;
    };

    pow() {
        
        pow.textContent = Math.pow(this.a,this.b);
    };
};

let machine = new Calculator();

startBtn.addEventListener('click', machine.getValue);
sumBtn.addEventListener('click', machine.sum);
minBtn.addEventListener('click', machine.minus);
multBtn.addEventListener('click', machine.mult);
divBtn.addEventListener('click', machine.divide);
powBtn.addEventListener('click', machine.pow);