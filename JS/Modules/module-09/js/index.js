const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
  { preview: 'img/preview-7.jpeg', fullview: 'img/fullview-7.jpeg', alt: "alt text 7" },
  { preview: 'img/preview-8.jpeg', fullview: 'img/fullview-8.jpeg', alt: "alt text 8" },
  { preview: 'img/preview-9.jpeg', fullview: 'img/fullview-9.jpeg', alt: "alt text 9" },
  { preview: 'img/preview-10.jpeg', fullview: 'img/fullview-10.jpeg', alt: "alt text 10" },
];

const targetConteiner = document.querySelector('.js-image-gallery');

targetConteiner.innerHTML = `<div class="fullview"><img src=${galleryItems[0].fullview} alt="alt text 1"></div><ul class="preview"></ul>`;

const fullviewList = document.querySelector('.fullview');
const previewList = document.querySelector('.preview');

window.addEventListener('DOMContentLoaded', pushPreviewItems)
function pushPreviewItems() {
  for (let i = 0; i < galleryItems.length; i++) {
    if(i===0){
      previewList.innerHTML += `<li><img src=${galleryItems[i].preview} data-fullview=${galleryItems[i].fullview} alt='${galleryItems[i].alt}' class='selected'></li>`
    } else {
      previewList.innerHTML += `<li><img src=${galleryItems[i].preview} data-fullview=${galleryItems[i].fullview} alt='${galleryItems[i].alt}'></li>`
    };
  };
}

previewList.addEventListener('click', changeFullview);
function changeFullview(e) {
  if (e.target.nodeName === 'IMG') {
    fullviewList.firstElementChild.src = e.target.dataset.fullview;
    fullviewList.firstElementChild.alt = e.target.alt;
    for (const el of previewList.childNodes) {
      el.firstChild.classList.remove('selected');
    }
    e.target.classList.add('selected');
  }
}


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

/* Далее плагин работает в автономном режиме */