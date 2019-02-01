// Module 07
/* Task 03
  Дан ul склассом .list и массив строк. 
  
  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

const list = document.querySelector('.list');
for (const el of elements) {
	const li = document.createElement('li');
	list.appendChild(li).textContent = el;
}