//variables
let mostrarCatSleep = false;
let mostrarCatWhat = false;
let mostrarCatWhatch = false;
let mostrarContenedor = false;
let textoEncriptado;
let textoDesencriptado;

const valorIngresado = document.getElementById('valorIngresado');
const imagenCatSleep = document.getElementById('imagenCatSleep');
const imagenCatWhat = document.getElementById('imagenCatWhat');
const containerResultado = document.getElementById('containerResultado');
const containerBtnCopiar = document.getElementById('containerBtnCopiar');

//Evento al ingresar valores en textarea valorIngresado
valorIngresado.addEventListener('input', function() {
    if (valorIngresado.value.trim() === '') {
        mostrarCatSleep = true; // No mostrar la imagen si el textarea está vacío
        mostrarCatWhat = false;
        mostrarCatWhatch = false;
        mostrarContenedor = false;
        document.querySelector('#resultadoProceso').value = '';
        document.getElementById('encriptar').setAttribute('disabled', true);
        document.getElementById('desencriptar').setAttribute('disabled', true);
    } else if (valorIngresado.value.trim() !== '') {
        mostrarCatSleep = false; // Mostrar la imagen si el textarea tiene contenido
        mostrarCatWhat = true;
        mostrarCatWhatch = false;
        mostrarContenedor = false;
        document.querySelector('#resultadoProceso').value = '';
        document.getElementById('encriptar').removeAttribute('disabled');
        document.getElementById('desencriptar').removeAttribute('disabled');
    }
    actualizarVisibilidadImagen();
});

function actualizarVisibilidadImagen() {
    if (mostrarCatSleep) {
        imagenCatSleep.style.display = 'block';
        imagenCatWhat.style.display = 'none';
        containerResultado.style.display = 'none';
        containerBtnCopiar.style.display = 'none';
    } else {
        imagenCatWhat.style.display = 'block';
        imagenCatSleep.style.display = 'none';
        containerResultado.style.display = 'none';
        containerBtnCopiar.style.display = 'none';
    }
}

//dinamico para valores
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//funcion para encriptar texto
function encriptarTexto(){
    let textoIngresado =document.getElementById('valorIngresado').value;
    console.log(textoIngresado)
    if (!/^[a-z\s]*$/.test(textoIngresado)) {
        alert('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    textoEncriptado = textoIngresado
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('resultadoProceso').value = textoEncriptado;
    console.log(textoEncriptado)
    if (valorIngresado.value.trim() !== ''){
        imagenCatSleep.style.display = 'none';
        imagenCatWhat.style.display = 'none';
        containerResultado.style.display = 'block';
        containerBtnCopiar.style.display = 'block';
    } else {
        condicionesIniciales();
    }
}

//funcion para desencriptar texto
function desencriptarTexto(){
    let textoIngresado = document.getElementById('valorIngresado').value;
    if (!/^[a-z\s]*$/.test(textoIngresado)) {
        alert('El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    textoDesencriptado = textoIngresado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('resultadoProceso').value = textoDesencriptado;
    console.log(textoDesencriptado)
    if (valorIngresado.value.trim() !== ''){
        imagenCatSleep.style.display = 'none';
        imagenCatWhat.style.display = 'none';
        containerResultado.style.display = 'block';
        containerBtnCopiar.style.display = 'block';
    } else {
        condicionesIniciales();
    }
}

//Funcion para copiar texto
function copiarTexto() {
    // Seleccionar el texto del textarea
    const textarea = document.getElementById('resultadoProceso');
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto seleccionado al portapapeles
    document.execCommand('copy');

    // Deseleccionar el texto
    textarea.setSelectionRange(0, 0);

    // Mostrar algún mensaje de confirmación opcional
    alert('¡Texto copiado al portapapeles!');
}


//condiciones iniciales
function condicionesIniciales() {
    // asignarTextoElemento('h1', 'Juego del número secreto');
    imagenCatSleep.style.display = 'block';
    imagenCatWhat.style.display = 'none';
    containerResultado.style.display = 'none';
    containerBtnCopiar.style.display = 'none';
    document.querySelector('#valorIngresado').value = '';
    document.querySelector('#resultadoProceso').value = '';
    document.getElementById('encriptar').setAttribute('disabled', true);
    document.getElementById('desencriptar').setAttribute('disabled', true);

}

condicionesIniciales();