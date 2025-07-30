let titulo =document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function clickConsole(){
    console.log('El botón fue presionado');
}

function clickPrompt(){
    let Brasil = prompt('Dime una ciudad de Brasil');
    alert(`Estuve en ${Brasil} y me acordé de ti`);
}

function clickAlert(){
    alert('Yo amo JS');
}

function clickSuma(){
    let valor1 = parseInt(prompt('Dime un número positivo entero'));
    let valor2 = parseInt(prompt('Dime otro número positivo entero'));
    let suma = valor1 + valor2;
    alert(`La suma de ${valor1} y ${valor2} es ${suma}`);
}