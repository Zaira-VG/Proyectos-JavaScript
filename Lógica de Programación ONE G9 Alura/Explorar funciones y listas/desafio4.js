let listaGenerica = [];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarLenguagesSeparadamente();

function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarLenguagesReversoSeparadamente();

function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}
let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];
  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }
  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}
let numeros2 = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros2);

function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}
let numeros3 = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros3);
console.log('Suma:', suma);

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado1 = sumarListas(lista1, lista2);
console.log(resultado1);  


function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}
const lista = [2, 3, 4];
const resultado2 = cuadradoLista(lista);
console.log(resultado2);  
