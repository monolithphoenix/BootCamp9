// Promise
// resolve - функция, которая выполняется при удачном выполнении
// reject - функция, которая выполняется при ошибке
// const pro = new Promise (function(resolve, reject) => {}) 

const trackList = document.querySelector('.tracks')
const ul = document.createElement('ul');
const lastFMGeoTracks = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=ukraine&api_key=412e51e107155c7ffabd155a02371cbd&limit=25&format=json';

trackList.appendChild(ul);

window.addEventListener('DOMContentLoaded', getTracks);

// getTracks(lastFMGeoTracks);
function getTracks() {
    fetch(lastFMGeoTracks)
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

ul.addEventListener('click', createRequest)
function createRequest(e) {
    const artist = e.target.closest('li').children[1].textContent;
    const composition = e.target.closest('li').children[2].textContent;

    let search = artist + '|' + composition;
    console.log(search);
    const youtubeSearch = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&part=snippet&maxResults=1&q=${artist}|${composition}`;

    getYTSearch(youtubeSearch);

    function getYTSearch(link) {
        fetch(link)
            .then(res => res.json())
            .then(data => startVideo(data.items[0].id.videoId))
            .catch(err => console.log(err))
    }
}


const iframe = document.querySelector('iframe');
function startVideo(link) {
    iframe.src = `https://www.youtube.com/embed/${link}?autoplay=1`;
    iframe.classList.add('unhide');
}
// let search; 

// const youtubeSearch = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAGwWGzULP4Q9plH7a9ATpZW_8o2ZgJOH8&part=snipet&maxResults=1&q=${search}`

// getYTSearch(youtubeSearch);
// function getYTSearch(link) {
//     fetch(link)
//         .then(res => res.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// youtrube iframe
// <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
// </iframe>