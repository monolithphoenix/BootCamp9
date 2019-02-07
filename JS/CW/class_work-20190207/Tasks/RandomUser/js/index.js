// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };

//     const source = document.querySelector('#template').innerHTML.trim();
//     const templateFunc = Handlebars.compile(source);
//     const markup = templateFunc(gallery);
//     const container = document.querySelector('.gallery-content');
//     container.innerHTML = markup;

const sourse = 'https://randomuser.me/api/';
console.log(sourse);
fetch(sourse)
    .then(res => res.json())
    .then(data => createUserCard(data))
    .catch(err => console.log(err))


const targerConteiner = document.querySelector('.cardConteiner');

function createUserCard(obj) {
    console.log(obj.results[0]);
    const src = obj.results[0].picture.large;
    const alt = obj.results[0].name.first + obj.results[0].name.last;
    
    targerConteiner.innerHTML = `
    <img src=${src} alt=${alt} class=horisontalCenter>
    <p class=subparagraph>Some text</p>
    <p class=paragraph>Some text two</p>
    <ul class="values_list">
        <li data-label=name></li>
        <li data-label=email></li>
        <li data-label=birthday></li>
        <li data-label=location></li>
        <li data-label=phone></li>
        <li data-label=password></li>
    </ul>`;
    

}

console.log(targerConteiner);
