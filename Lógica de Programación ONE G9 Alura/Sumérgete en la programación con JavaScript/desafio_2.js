let diaSemana= prompt('¿Qué día de la semana es hoy?');
if (diaSemana === 'Sábado' || diaSemana === 'Domingo'){
/*
Doble signo de igualda (==) es para comparar valores; '1' == 1 es verdadero.
Triple signo de igualdad (===) es para comparar valor y tipo; '1' === 1 es falso.
*/
    alert('¡Buen fin de semana!');
}else{
    alert('¡Buena semana!');
}

let numero = prompt('Escribe un número: ');
if (numero < 0){
    alert('El número es negativo');
}else if (numero > 0){
    alert('El número es positivo');
}else{
    alert('El número es cero');
}

let puntaje = prompt('¿Cuál fue tu puntaje del juego?');
if (puntaje >= 100){
    alert('¡Felicdades, has ganado!');
}else{
    alert('Intentalo nuevamente para ganar');
}

let saldoUsuario = 1000;
alert(`Tu saldo actual es: ${saldoUsuario}`);

let nombre = prompt('Escribe tu nombre: ');
alert(`¡Bienvenido/a, ${nombre}!`);