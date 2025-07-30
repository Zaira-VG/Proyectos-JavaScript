let listaNumSorteados  = [];
let numMax= 10;
let numSecreto =  generarNumSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numSecreto === numUsuario){
        asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${intentos==1 ? 'vez' : 'veces' }!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (numUsuario > numSecreto){
        asignarTextoElemento('p', `El número secreto es menor`);
    }else{
        asignarTextoElemento('p', `El número secreto es mayor`);
    }
    intentos++;
    limpiarCaja();
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
    let numGenerado = Math.floor(Math.random()*numMax)+1;
    console.log(numGenerado);
    console.log(listaNumSorteados);
    //si ya sorteamos todos los números posibles:
    if(listaNumSorteados.length === numMax){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')
    }else{
        if (listaNumSorteados.includes(numGenerado)){
            return generarNumSecreto(); //vuelve a llamar a la función
        //si el número generado no está incluido en la lista:
        }else{
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numMax}`);
    numSecreto =  generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja de texto
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
}

condicionesIniciales();