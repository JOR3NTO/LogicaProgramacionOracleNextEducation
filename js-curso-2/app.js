/*
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafío";

function mostrarContenido(params) {
    console.log("¡Hola, mundo!");
}

function mostrarCiudad(params) {
    let ciudad = prompt("Ingrese una ciudad");

    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function Alert(params) {
    alert("Yo amo JS");
}

function suma(params) {
    let num1 = parseInt(prompt("Indique un numero: "));
    let num2 = parseInt(prompt("Indique otro numero: "));
    let resut = num1 + num2;
    alert(`La suma es: ${resut}`);
}
*/



/*
Crear una función que muestre "¡Hola, mundo!" en la consola.
Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
Crear una función que reciba tres números como parámetros y devuelva su promedio.
Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar 
ese número por sí mismo.


//Funciones----------------------------------
function mostrarContenido(params) {
    console.log("¡Hola, mundo!");
}

function mostrarNombre(nombre) {
    console.log(`Hola, ${nombre}`);    
}

function duplicarNumero(numero) {
    return numero*2;
}

function promedio(a,b,c) {
    return (a+b+c)/3;
}

function mayor(a,b) {
    return (a > b) ? a: b;    
}

function NumeroByNumero(numero) {
    return numero*numero;
}
//---------------------------------------------------


mostrarContenido();
let nombre = prompt("Ingrese su nombre: ");
mostrarNombre(nombre);
let numero = prompt("Ingrese un numero: ");
console.log(duplicarNumero(numero));
let a = 2, b = 8, c = 7;
console.log(`El promedio entre ${a}, ${b}, ${c} es: ${promedio(a,b,c)}`);
console.log(`El numero mayor entre ${a} y ${b} es ${mayor(a,b)}`);
console.log(NumeroByNumero(numero));
*/


/*
- Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su 
altura en metros y peso en kilogramos, que se recibirán como parámetros; IMC = PESO / ALTURA.

- Crea una función que calcule el valor del factorial de un número pasado como parámetro.

Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el 
valor equivalente en reales(moneda Colombiana,si deseas puedes hacerlo con el valor del 
dólar en tu país). Para esto, considera la cotización del dólar igual a $4.000.

Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.

Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.


*/



/*
function IMC(altura, peso) {
    return peso / altura;
}

function factorial(numero) {
    let resultado = 1;
    for(let i = numero; i >= 1 && numero != 0; i--){
        resultado *= i;
    }
    return resultado;
}

function convertirDolarAPeso(dolar) {
    return dolar * 4000;    
}

function areaYperimetroRectangulo(ancho, alto) {
    return `El area es ${ancho*alto} metros y su perimetro es ${(ancho*2) + (alto*2)} metros`;
}

function areaYperimetroCirculo(radio) {
    return `El area es ${Math.PI*radio*radio} metros y su perimetro es ${Math.PI*radio*2} metros`;
}

function tabla(numero) {
    for (let index = 1; index <= 10; index++) {
        console.log(`${numero} X ${index} = ${numero * index}`);
    }
}

console.log(IMC(1.76, 68));
console.log(factorial(8));
console.log(convertirDolarAPeso(300));
console.log(areaYperimetroRectangulo(5, 8));
console.log(areaYperimetroCirculo(6));
tabla(9);


*/



/*
- Crea una lista vacía llamada "listaGenerica".

- Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion 
con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

- Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

- Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

- Crea una función que calcule el promedio de los elementos en una lista de números.

- Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

- Crea una función que devuelva la suma de todos los elementos en una lista.

- Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
pasado como parámetro, o -1 si no existe en la lista.

- Crea una función que reciba dos listas de números del mismo tamaño y devuelva una 
nueva lista con la suma de los elementos uno a uno.

Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

*/

let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];

let listaNumeros = [1,2,3,4,5,6,7,8,9,10];

let lista1 = [1,2,3];
let lista2 = [4,5,6];

lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang');

function mostrarElementos() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
        console.log(lenguajesDeProgramacion[i]);        
    }
}

function mostrarElementosInverso() {
    for (let i = lenguajesDeProgramacion.length-1; i >= 0; i--) {
        console.log(lenguajesDeProgramacion[i]);        
    }
}

function promedio() {
    let resut=0;
    for (let i = 0; i < listaNumeros.length; i++) {
        resut+=listaNumeros[i];
    }    
    return resut/listaNumeros.length;
}

function mayorYMenor() {
    listaNumeros.sort;
    return `el numero mayor es ${listaNumeros[listaNumeros.length-1]} y el numero menor es ${listaNumeros[0]}`;
}

function suma() {
    let resut=0;
    for (let i = 0; i < listaNumeros.length; i++) {
        resut+=listaNumeros[i];
    }  
    return resut;
}

function encontrar(numero) {
    let cont=0;
    for (let index = 0; index < listaNumeros.length; index++) {
        if (numero == listaNumeros[index]) return index;  
        else cont++;
    }

    if(cont >= listaNumeros.length) return -1;
}

function sumarListas(lista1, lista2) {
    let listaResultante = [];
    for (let index = 0; index < lista1.length; index++) {
        listaResultante.push(lista1[index]+lista2[index]);
    }

    return listaResultante;
}

function cuadrado(listaNumeros) {
    let listaCuadrados = [];
    for (let index = 0; index < listaNumeros.length; index++) {
        listaCuadrados.push(listaNumeros[index]*listaNumeros[index]);
    }
    return listaCuadrados;
}

mostrarElementos();
mostrarElementosInverso();
console.log(promedio());
console.log(mayorYMenor());
console.log(suma());
console.log(encontrar(3));
console.log(sumarListas(lista1, lista2));
console.log(cuadrado(listaNumeros));


