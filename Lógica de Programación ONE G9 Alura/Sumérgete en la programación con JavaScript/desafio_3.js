let contador = 1;
while (contador <= 10){
    alert(`El número es ${contador}`);
    contador++; //incrementamos el contador
}

let Contador = 10;
while (Contador >= 0){
    alert(`El número es ${Contador}`);
    Contador--; //decrementamos el contador
}

let contadorRegresivo = prompt('Indica un número para inicar la cuenta regresiva: ');
while (contadorRegresivo >= 0){
    alert(`El número es ${contadorRegresivo}`);
    contadorRegresivo--;
}

let numObjetivo = prompt('Indica un número al que quieres llegar con la cuenta progresiva: ');
let inicio = 0;
while (numObjetivo >= inicio){
    alert(`El número es ${inicio}`);
    inicio++;
}