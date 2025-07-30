function showGreeting (){
    console.log('Hello World');
    return;
}
showGreeting();

function showName (name){
    console.log(`Hola ${name}`);
    return;
}
showName('Zaira');

function doubleNumber (number){
    let double = number * 2;
    console.log(double);
    return double;
}
doubleNumber(5);

function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);

function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);

function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);