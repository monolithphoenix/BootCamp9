/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

function createMovieCard(obj) {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const divBody = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const a = document.createElement('a');
// Вкладываем тэги
  div.appendChild(img).classList.add('movie__image');
  div.appendChild(divBody).classList.add('movie__body');
  divBody.appendChild(h2).classList.add('movie__title');
  divBody.appendChild(p).classList.add('movie__description');
  divBody.appendChild(a);
// Добавляем атрибуты
  a.setAttribute('href', obj.link)
  img.setAttribute('src', obj.img);
  img.setAttribute('alt', 'movie image');
// Вставляем текст
  h2.textContent = obj.title;
  p.textContent = obj.text;
  a.textContent = 'Read more...';
// Выводим карточку в <body>
  return root.appendChild(div).classList.add('movie');
}

function createCards() {
  for (const el of posts) {
    createMovieCard(el);
  }
}

createCards();