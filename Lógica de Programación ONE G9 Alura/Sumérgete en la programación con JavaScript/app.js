let numMaxPosisble =100;
let numSecreto = Math.floor(Math.random()*numMaxPosisble+1); //signo = es para la asignación de valores
let numUsuario = 0; //inicializamos la variable para que no de error en while
let intentos = 1;
let maxIntentos = 5;
while(numUsuario != numSecreto){ //!= diferente de
    numUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numMaxPosisble} por favor: `));
    console.log(typeof numUsuario);
    if (numUsuario == numSecreto){ //doble signo = es para comparación de valores
        alert(`¡Acertaste!, el número secreto es ${numSecreto}. Lo lograste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); //? como if y : como else; operador ternario
    } else if(numUsuario < numSecreto){
            alert(`El número secreto es mayor que ${numUsuario}`);
        }else{
            alert(`El número secreto es menor que ${numUsuario}`);
        }
        intentos++; //incrementamos el contador cuando no acierta el usuario
        if (intentos > maxIntentos){
            alert(`Llegaste al límite de intentos de ${maxIntentos} intentos. El número secreto era ${numSecreto}`);
            break; //rompe el ciclo while
        }
 }
