const CONSIGNA = `De acuerdo a lo visto en la clase, recupere datos a través de la API de “LASTFM”,
https://www.last.fm/api. La misma es una plataforma para ver artistas destacados de
la música. Lea la documentación requerida y extraiga del JSON para verlos por consola
los API de la metadata son chart.gettopartists , una vez encontrada la url, copie el
JSON completo para usarlo en el script y extraiga los siguientes datos:
del artista: “name”, "playcount" y "listeners" de cada uno de los artistas top 10 o mas
destacados.
Tenga en cuenta que para hacer uso de las api, debe crearse una cuenta para obtener
el api key.`;
let consigna_box = document.querySelector('#textoconsigna');
consigna_box.innerHTML = CONSIGNA;
let mensaje = document.querySelector('#mensaje');

const API_KEY = 'tu API aquí';
// const URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json`;
//OFFLINE: 
const URL = 'topartists.json';

function mostrarArtistas(artistas) {
    let html = '<h1>TOP 10 Artistas</h1><ul>';

    artistas.forEach(artista => {
        html += `<li>${artista.name} - reproducciones: ${Math.round(artista.playcount / 1000000)}M - oyentes: ${Math.round(artista.listeners / 1000000)}M</li>`
    });

    html += '</ul>'

    mensaje.innerHTML = html;
}

function leerTop10Artists() {
    fetch(URL)
        .then(resp => resp.json())
        .then(data => mostrarArtistas(data.artists.artist.slice(0, 10)));
}

leerTop10Artists();