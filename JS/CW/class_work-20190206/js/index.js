// Promise
// resolve - функция, которая выполняется при удачном выполнении
// reject - функция, которая выполняется при ошибке
// const pro = new Promise (function(resolve, reject) => {}) 
const trackList = document.querySelector('.tracks')
const ul = document.createElement('ul');
const lastFMGeoTracks = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=ukraine&api_key=412e51e107155c7ffabd155a02371cbd&limit=25&format=json';
// let ObjGeoTracks = {};

trackList.appendChild(ul);

// trackList.addEventListener('click', changeImgSize);
// function changeImgSize(e) { 
//     // console.log(e.target.nodeName);
//     if (e.target.nodeName !== 'IMG') {return}
// }

getTracks(lastFMGeoTracks);
function getTracks(link) {
    fetch(link)
        .then(res => res.json())
        .then(data => getObj(data.tracks))
        .catch(err => console.log(err))
}

// console.log(ObjGeoTracks);
// function getObj(obj) {
//     console.log(obj);
//     ObjGeoTracks = obj;
//     console.log(obj.track.length);
//     let cont = '';
//         for (let i = 0; i < obj.track.length; i++) {
//             cont += `<ul><li>
//             <img src=${obj.track[i].image[0]['#text']} alt="">
//             <span class='artistName'>${obj.track[i].artist.name}</span>
//             <span class='trackName'>${obj.track[i].name}</span>
//             </li></ul>`
//         }
//         trackList.innerHTML = cont;
// }

function getObj(obj) {
    // console.log(obj);
    // ObjGeoTracks = obj;
    // console.log(obj.track.length);
   
    for (let i = 0; i < obj.track.length; i++) {        
        ul.innerHTML += `<li>
        <img src=${obj.track[i].image[0]['#text']} alt="">
        <span class='artistName'>${obj.track[i].artist.name}</span>
        <span class='trackName'>${obj.track[i].name}</span>
        </li>`
    }
}

// console.log(ObjGeoTracks);

// createTrackList
//tracks.track[""0""].image[""0""][""#text""]
//tracks.track['0'].image['0']['#text']
// track[""0""].artist.name