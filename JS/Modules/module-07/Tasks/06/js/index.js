// Module 07
/* Task 06
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

function createMovieCard() {
  const body = document.querySelector('body');
  const div = document.createElement('div');
  const img = document.createElement('img');
  const divBody = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const pDate = document.createElement('p');
  const pRate = document.createElement('p');
// Наполняем тэгами
  div.appendChild(img).classList.add('movie__image');
  div.appendChild(divBody).classList.add('movie__body');
  divBody.appendChild(h2).classList.add('movie__title');
  divBody.appendChild(p).classList.add('movie__description');
  divBody.appendChild(pDate).classList.add('movie__date');
  divBody.appendChild(pRate).classList.add('movie__rating');
// Добавляем атрибуты
  img.setAttribute('src', 'http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg');
  img.setAttribute('alt', 'movie image');
// Вставляем текст
  h2.textContent = 'The Godfather';
  p.textContent = 'The Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.';
  pDate.textContent = 'Released: 1972-03-14';
  pRate.textContent = 'Rating: 8.6';
// Выводим карточку в <body>
  return body.appendChild(div).classList.add('movie');
}
createMovieCard()