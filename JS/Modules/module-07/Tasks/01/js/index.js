// Module 07
/* Task 01
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/

let catArr = Array.from(document.querySelector('.categories').children);

for (const el of catArr) {
    let catElCont = el.children[0].children.length;
    let catElName = el.firstChild.wholeText.trim();
    console.log(`Категория: ${catElName}
Количество вложенных li: ${catElCont}`);
}


// console.log(cat.firstElementChild.lastElementChild.childElementCount);
// console.log(cat.children);
// console.log(cat.children[0]);
// console.log(cat.children[0].firstChild.textContent);
// console.log(cat.children[0].firstChild.textContent.trim());

// console.log(cat.children[0].children[0].textContent);
// console.log(cat.children[0].childNodes);
// console.log(cat.children[0].childNodes[0]);


// console.log(cat.children[0].firstChild.textContent.trim());
// console.log(cat.children[1].firstChild.textContent.trim());
// console.log(cat.children[2].firstChild.textContent.trim());

// console.log('Колличество вложенных элементов:');
// console.log(cat.children[0].children[0].children.length);
// console.log(cat.children[1].children[0].children.length);
// console.log(cat.children[2].children[0].children.length);
