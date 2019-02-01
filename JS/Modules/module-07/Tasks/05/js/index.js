// Module 07
/* Task 05
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию collectInputData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает массив значений атрибута value.
*/

const list = document.querySelectorAll('input');
const inputArr = Array.from(list);
const inputArrChecked = inputArr.filter(el => el.attributes.checked);

// console.log(list);
// console.log(inputArr);
// console.log(inputArrChecked);

function collectInputData(inputs) {
  const val = [];
  for (const el of inputs) {
    val.push(el.value);
  }
 return console.log(val); 
}

collectInputData(inputArrChecked)