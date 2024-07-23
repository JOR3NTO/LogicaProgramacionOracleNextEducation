/*let titulo = document.querySelector('h1');
//Para enviar Strings a una etiqueta innerHTML
titulo.innerHTML = 'Juego del número secreto';
*/

let numero_secreto = generar_numero_secreto();
let intentos = 1;
function asignar_texto_elemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    //Para enviar Strings a una etiqueta innerHTML
    elementoHTML.innerHTML = texto;
    return;
}

function verificar_intento(params) {
    let numero_usuario = document.getElementById('valor_usuario').value;

    if(numero_usuario === numero_secreto){
        asignar_texto_elemento('p',`acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    }else{
        if(numero_usuario > numero_secreto){
            asignar_texto_elemento('p','El numero secreto es menor');
        }else{
            asignar_texto_elemento('p','El numero secreto es mayor');
        }
        intentos++;
    }

    return;
}


function generar_numero_secreto(params) {
    return Math.floor(Math.random()*10)+1;
}

asignar_texto_elemento('h1','juego del numero secreto!');

asignar_texto_elemento('p','Indica un numero del 1 al 10:');