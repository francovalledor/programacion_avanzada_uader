const CONSIGNA = `Realice una concatenación entre dos cadenas literales para que devuelva su edad en un console.log( “” )`;
let consigna_box = document.querySelector('#textoconsigna');
consigna_box.innerHTML = CONSIGNA;

let edad = prompt('Su edad: ');
let mensaje = document.querySelector('#mensaje');
mensaje.innerHTML = 'Usted tiene ' + edad + ' años';