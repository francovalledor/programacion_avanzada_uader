const CONSIGNA = `Utilizando condicionales múltiples, realice un script que verifique la edad de Jubilación de una persona, verificando el sexo, siendo que la edad de Jubilación para el Hombre
es de 65 años y la Mujer a los 60 años.`;
let consigna_box = document.querySelector('#textoconsigna');
consigna_box.innerHTML = CONSIGNA;
let mensaje = document.querySelector('#mensaje');


let edad;
let sexo;
let html;
let esta_jubilado = false;

const umbrales = {
    'H' : 65,
    'M' : 60
}

while (isNaN(edad)) {
    edad = parseInt(prompt('su edad: '));
}


while ( ! (sexo in umbrales) ) {
    sexo = prompt('su sexo (M/H): ');
}

if (edad >= umbrales[sexo]) {
    esta_jubilado = true;
}

if (esta_jubilado) {
    html = 'Felicidades! usted está jubilado!!';
} else {
    html = `Paciencia, le restan ${umbrales[sexo] - edad} años para jubilarse`;
}

mensaje.innerHTML = html;