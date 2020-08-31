function validar(event) {
    const form = document.querySelector('#formulario form');

    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
        consultar_antes_enviar(form);
    } else {
        mensaje_datos_incorrectos();
    }

    form.classList.add('was-validated');
}

async function consultar_antes_enviar(form) {
    respuesta = await swal({
        title: "Datos correctos. Enviar?",
        icon: "success",
        buttons: ["Cancelar", 'Enviar'],
    });

    if (respuesta === true) {
        form.submit();
    }
}

function mensaje_datos_incorrectos() {
    swal({
        title: "Datos incorrectos",
        text: "Por favor revisa los datos", 
        icon: "error",
    });
}

function activar_formulario() {
    const boton = document.querySelector('#formulario button#enviar');
    boton.removeAttribute('disabled')
    const form = document.querySelector("#formulario");
    form.onsubmit = validar;
}


window.addEventListener('load', activar_formulario);