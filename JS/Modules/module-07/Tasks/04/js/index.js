// Module 07
/* Task 04
  Напишите скрипт для создания галлереи изображений. 
  
  - На вкладке HTML уже есть ul.gallery.
  - Используйте массив объектов для создания тегов img вложенных в li
  - Оформление по вкусу, можно и не делать, достаточно чтобы каждое 
    изображение было 300px по ширине
  - Добавьте все элементы галлереи в ul.gallery
*/

const galleryItems = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat"
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish"
  },
  {
    url:
      "https://images.pexels.com/photos/1216482/pexels-photo-1216482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Two Brown Hen and One Red Rooster"
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running"
  },
  {
    url:
      "https://images.pexels.com/photos/1316294/pexels-photo-1316294.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Macaw Birds"
  },
  {
    url:
      "https://images.pexels.com/photos/41178/africa-animal-big-carnivore-41178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "2 Lion on Grass Field during Daytime"
  }
];

const gallery = document.querySelector('.gallery');
console.log(gallery);
gallery.setAttribute('style', 'list-style:none; display:flex; flex-wrap:wrap');
for (const el of galleryItems) {
  const li = document.createElement('li');
  const img = document.createElement('img');
  gallery.appendChild(li);
  li.appendChild(img).setAttribute('width', '300px');
  li.appendChild(img).setAttribute('height', '200px');
  img.setAttribute('alt', el.alt);
  img.setAttribute('src', el.url);
  img.setAttribute('style', 'object-fit:cover');
}
