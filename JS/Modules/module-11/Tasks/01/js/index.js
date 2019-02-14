/*
  К pen уже подключен Handlebars.
  Используйте встроенные шаблоны и метод Handlebars.compile
  
  Создайте шаблон списка указаного во вкладке HTML.
  
  Отрендерите список в DOM по данным из массива listItems.
*/

const products = [
  { name: 'Apples', count: 50 },
  { name: 'Grapes', count: 44 },
  { name: 'Cheese', count: 128 },
  { name: 'Milk', count: 293 },
];

const container = document.querySelector('.products');
const newSource = document.querySelector('#temp').innerHTML.trim();
console.log(newSource);

const tempFunc = Handlebars.compile(newSource);
console.log(tempFunc);

const newMarkup = tempFunc(products);
console.log(newMarkup);
container.innerHTML += newMarkup;