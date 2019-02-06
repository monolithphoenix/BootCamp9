// Promise
// resolve - функция, которая выполняется при удачном выполнении
// reject - функция, которая выполняется при ошибке
// const pro = new Promise (function(resolve, reject) => {}) 

const trackList = document.querySelector('.tracks')
const ul = document.createElement('ul');
const lastFMGeoTracks = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=ukraine&api_key=412e51e107155c7ffabd155a02371cbd&limit=25&format=json';

trackList.appendChild(ul);


getTracks(lastFMGeoTracks);
function getTracks(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => getObj(data.tracks))
        .catch(err => console.log(err))
}

function getObj(obj) {  
    for (let i = 0; i < obj.track.length; i++) {        
        ul.innerHTML += `<li>
        <img src=${obj.track[i].image[0]['#text']} alt="">
        <span class='artistName'>${obj.track[i].artist.name}</span>
        <span class='trackName'>${obj.track[i].name}</span>
        </li>`
    }
}