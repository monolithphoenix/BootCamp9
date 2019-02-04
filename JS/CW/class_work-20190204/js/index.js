// const URL = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=photo&category=backgrounds&per_page=12';

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data.hits))
//     .catch(err => console.log(err))

// CRUD
// 1) GET - READ
// 2) POST - CREATE
// 3) DELETE - DELETE
// 4) PUT - UPDATE/UPGRADE

const CONTEINER = document.querySelector('#container');
const input = document.querySelector('.input');
// const submit = document.querySelector('.btn');
const form = document.querySelector('.box');

function readValue(e) {
    e.preventDefault();
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input.value}&per_page=9`;
    fetchData(url);
    form.reset();
}

function fetchData(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => createGallary(data.hits))
        .catch(err => console.log(err))
}

function createGallary(arr) {
    let string = arr.reduce((acc, el) => acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`, '')
    CONTEINER.innerHTML = string;
}

form.addEventListener('submit', readValue);

// submit.addEventListener('click', getGallary);

// function getGallary(event) {
//     event.preventDefault();
//     // console.log(input.value);
//     const URL = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&image_type=photo&q=${input.value}&per_page=9`;
//     console.log(URL);
//     fetch(URL)
//         .then(response => response.json())
//         .then(data => getArr(data.hits))
//         .catch(err => console.log(err))
//     function getArr (arr) {
//         // console.log(arr);
//         const largeImageArr = arr.map(el => el.largeImageURL);
//         // console.log(arr.map(el => el.largeImageURL));
//         for (const el of largeImageArr) {
//             const div = document.createElement('div');
//             const a = document.createElement('a')
//             const img = document.createElement('img');
//             a.setAttribute('href', el);
//             img.setAttribute('src', el);
//             CONTEINER.appendChild(div);
//             div.appendChild(a);
//             a.appendChild(img)
//             console.log(el);
//         } 
//     }
// }

