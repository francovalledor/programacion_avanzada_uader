const CONSIGNA = `Utilizando condicionales múltiples, realice un script que verifique la edad de Jubilación de una persona.`;
let consigna_box = document.querySelector('#textoconsigna');
consigna_box.innerHTML = CONSIGNA;
let mensaje = document.querySelector('#mensaje');


let edad;
let html;

while (isNaN(edad)) {
    edad = parseInt(prompt('su edad: '));
}

if (edad >= 65) {
    html = 'Felicidades! usted está jubilado!!';
} else {
    html = `Paciencia, le restan ${65 - edad} años para jubilarse`;
}


mensaje.innerHTML = html;