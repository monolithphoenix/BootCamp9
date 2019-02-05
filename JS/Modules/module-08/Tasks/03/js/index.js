// Module 08
/* Task 03
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к разметке
*/
const sub = document.querySelector('button[data-action="sub"]');
const add = document.querySelector('button[data-action="add"]');
const val = document.querySelector('.value');

class Counter{
  constructor(onChange) {
    this.value = 0;
    this.onChange = onChange;
    this.onChange(this.value);
    this.onChange = this.onChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  increment() {
    this.value++;
    this.onChange(this.value);
  }

  decrement() {
    this.value--;
    this.onChange(this.value);
  }
};

const result = new Counter(update);

function update (num) {
  val.textContent = num;
}

sub.addEventListener('click', result.decrement);
add.addEventListener('click', result.increment);