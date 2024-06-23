//variables
let numeroSecreto = 0;
let intentos = 0;
let numeroSorteado = [];
let numeroMaximo = 3;
//dinamico para valores
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//validaciones para el numero ingresado por el usuario
function numeroUsuario(){
    let numeroIngresado = parseInt(document.getElementById('valorIngresado').value);
    if(numeroSecreto === numeroIngresado){
        asignarTextoElemento('p', `Acertaste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!!!. El número secreto era ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intento').setAttribute('disabled', true);
    } else {
        if(numeroSecreto > numeroIngresado){
            asignarTextoElemento('p', `El número secreto es mayor que ${numeroIngresado}`);
        } else {
            asignarTextoElemento('p', `El número secreto es menor que ${numeroIngresado}`);
        }
        intentos++;
        limpiarInput();
    }
};

//limpiar el input
function limpiarInput() {
    document.querySelector('#valorIngresado').value = '';
};

//genera automaticamente el numero secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo);
    console.log(numeroSecreto)

    console.log(numeroSorteado.length == numeroMaximo)

    //Si ya se sortearon todos los numeros posibles
    if(numeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado esta en la lista
        if(numeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            numeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }

};

//condiciones iniciales del juego
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Ingrese un número del 1 al ${numeroMaximo}`);

    //generar nuevamente el numero secreto
    numeroSecreto = generarNumeroSecreto();

    //inicializar numero de intentos
    intentos = 1;

    //deshabilitar boton 'Nuevo juego'
    document.getElementById('reiniciar').setAttribute('disabled', true);

    //habilitar boton Intentar
    document.getElementById('intento').removeAttribute('disabled');

}

//reinicia el juego
function reiniciarJuego(){
    //limpiar el input
    limpiarInput();

    //mensajes iniciales
    condicionesIniciales();
};

condicionesIniciales();