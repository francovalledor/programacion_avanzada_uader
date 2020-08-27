const CONSIGNA = `Modifique el siguiente código para que el programa calcule el IVA, en este caso, 
debería realizar un método que a partir de la propiedad del precio de cada objeto “Coche” calcule el 21%`;
let consigna_box = document.querySelector('#textoconsigna');
consigna_box.innerHTML = CONSIGNA;
let mensaje = document.querySelector('#mensaje');


function Coche(marca, modelo, precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
}

Coche.prototype.getIVA = function(){
    return 0.21 * this.precio;
}

var coches = [];
coches.push(new Coche('Renault', 'Laguna', 1800));
coches.push(new Coche('Ford', 'Mondeo', 2300));
coches.push(new Coche('Mercedes', '600', 8500));
coches.push(new Coche('Seat', 'Cordoba', 3000));


let html = '';
html += '<ul>';

coches.forEach(coche => { html += `<li>El coche ${coche.marca} ${coche.modelo} vale $${coche.precio} IVA: $${coche.getIVA()} </li>` });

html += '</ul>';



mensaje.innerHTML = html;