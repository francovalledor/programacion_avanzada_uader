const CONSIGNA = `Utilice los elementos de valores numéricos para: Sumar, Restar, Dividir, multiplicar, dividir dos
números.`;
let consigna_box = document.querySelector('#textoconsigna');
consigna_box.innerHTML = CONSIGNA;
let mensaje = document.querySelector('#mensaje');


let num1, num2;

while (isNaN(num1)) {
    num1 = parseInt(prompt('num1: '));
}

while (isNaN(num2)) {
    num2 = parseInt(prompt('num2: '));
}

let resultados = [];

let suma = 'SUMA: ' + (num1 + num2);
let resta = 'RESTA: ' + (num1 - num2);
let multiplicacion = 'MULTIPLICACION: ' + (num1 * num2);
let division = 'DIVISION: ';

if (num2 != 0) {
    division += (num1 / num2);
} else {
    division += 'No se puede dividir por cero';
}

resultados.push(suma, resta, multiplicacion, division);

let html = '';
html += '<ul>';

resultados.forEach(resultado => { html += `<li>${resultado}</li>`});

html += '</ul>';



mensaje.innerHTML = html;