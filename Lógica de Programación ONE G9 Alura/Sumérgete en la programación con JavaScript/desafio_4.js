console.log('¡Bienvenido/a!');

let nombre = prompt('¿Cuál es tu nombre?');
console.log(`¡Hola ${nombre}!`);

let miNombre = 'Zaira';
alert(`¡Hola ${miNombre}!`);

let lenguajeProgramacion = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Tu lenguaje de programación favorito es ${lenguajeProgramacion}`);

let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es ${resultado}`);

let Valor1 = 5;
let Valor2 = 10;
let Resultado = Valor1 - Valor2;
console.log(`La diferencia entre el ${Valor1} y el ${Valor2} es ${Resultado}`);

let edad = prompt('¿Cual es tu edad');
if (edad >= 18){
    console.log('Eres mayor de edad');
    }else{
        console.log('Eres menor de edad');
}

let numero = parseFloat(prompt('Ingresa un número: '));
if (numero > 0){
    console.log('El número es positivo');
}else if(numero < 0){
    console.log('el número es negativo');
}else{
    console.log('El número es cero');
}

let inicio = 1;
let fin = 10;
while (inicio <= fin){
    console.log(inicio);
    inicio++;
}

let nota = parseInt(prompt('Ingresa tu nota: '));
if (nota >= 7){
    console.log('Aprobado');
}else{
    console.log('Reprobado');
}

console.log(Math.random());

console.log(Math.floor(Math.random()*10+1));

console.log(Math.floor(Math.random()*1000+1));