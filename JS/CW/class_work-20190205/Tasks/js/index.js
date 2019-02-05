const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ul = document.querySelector('.todo-list');

fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('tasks', JSON.stringify(data));
        renderItem(data)
    })
    .catch(err => {
        let storageData = JSON.parse(localStorage.getItem('tasks')) || [];
        renderItem(storageData);
        console.log(err)
    })

// Ф отрисовывает HTML, добавляет элементы списка
function renderItem(arr) {
    let result = arr.reduce((acc, el) => acc + `<li class="todo-list__item">
    ${el.text}
        <button class="btn todo-list__item-remove" data-id=${el.id}>
            <i class="fa fa-times" data-id=${el.id}></i>
        </button>
    </li>`,'');
    ul.innerHTML += result
}

/* ToDo
1. Записать обновлённые данные на сервер
2.
3.
*/

// Ф создаёт таск, если он не пуст, отправляет на сервер и сохраняет на localStorage
function createTask() { 
    event.preventDefault();
    if (!input.value) {return};
    let task = {
        text: input.value,
    };
    // console.log(task);
    fetch('http://localhost:3001/tasks',{
        method: 'post',
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })
        .then(res => res.json())
        .then(data => {
            let arr = JSON.parse(localStorage.getItem('tasks'));
            arr.push(data);
            localStorage.setItem('tasks', JSON.stringify(arr));
            renderItem([data])})
        .catch(err => console.log(err))
    // console.log(task);
    form.reset();
}

// Ф удаляет элемент списка(li) из HTML и удаляет запись с сервера и на localStorage
function deleteTask(event) {
    let id = event.target.dataset.id;
    fetch(`http://localhost:3001/tasks/${id}`,{method: 'delete'})
        .then(res => res.json())
        .then(data => {
            event.target.closest('li').remove();
            let storageData = JSON.parse(localStorage.getItem('tasks'));
            let filteredArr = storageData.filter(el => el.id !== Number(id));
            localStorage.setItem('tasks', JSON.stringify(filteredArr));
            // console.log(event.target.closest('li'));
            // console.log(data);
            })
        .catch(err => console.log(err))
    // console.log(event.target.dataset.id);
    // console.log((event.target.parentNode.parentNode.textContent).trim());
}



form.addEventListener('submit', createTask)
ul.addEventListener('click', deleteTask)