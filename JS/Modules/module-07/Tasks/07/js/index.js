// Module 07
/* Task 07
  В HTML-документе уже есть тег с id="root" (вкладка HTML)
  
  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.
  
  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"
  
  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/

// const root = document.querySelector('.root');
function createBoxes(num) {
  // Var1
    // let count = 0;
    // while (count < num) {
    //   count++;
    //   const div = document.createElement('div');
    //   div.style.width = `${30+10*count}px`;
    //   div.style.height = `${30+10*count}px`;
    //   div.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    //   root.appendChild(div);
    // };
  // Var2
    for (let index = 0; index < num; index++) {
      const div = document.createElement('div');
      div.style.width = `${30+10*index}px`;
      div.style.height = `${30+10*index}px`;
      div.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
      root.appendChild(div);
    };
}
createBoxes(10)
// console.log(root);