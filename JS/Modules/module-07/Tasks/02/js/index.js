// Module 07
/* Task 02
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

let list = document.querySelector('.list');
list.firstElementChild.setAttribute('style', 'color:red')
list.lastElementChild.setAttribute('style', 'color:blue')
