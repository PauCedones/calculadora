
/*
1- Visualizar los botones correspondientes en el display
    1.1- hacer el evento
    1.2- hacer la funcion para c/u para mostrarse en el display
2- Hacer que el boton de igual muestre resultado en el display cuando se clikea
    2.1- hacer el evento
    2.2- hacer la funcion para mostrar el resultado
3- Hacer la funcion para que haga la operacion matematica
*/

//EVENTOS////
    //NUMEROS
document.querySelector('#n1').addEventListener('click', n1);
document.querySelector('#n2').addEventListener('click', n2);
document.querySelector('#n3').addEventListener('click', n3);
document.querySelector('#n4').addEventListener('click', n4);
document.querySelector('#n5').addEventListener('click', n5);
document.querySelector('#n6').addEventListener('click', n6);
document.querySelector('#n7').addEventListener('click', n7);
document.querySelector('#n8').addEventListener('click', n8);
document.querySelector('#n9').addEventListener('click', n9);
document.querySelector('#n0').addEventListener('click', n0);
    //OPERADORES MATEMATICOS
document.querySelector('#sblMas').addEventListener('click', operadorSuma);
document.querySelector('#sblMenos').addEventListener('click', operadorResta);
document.querySelector('#sblMultiplicar').addEventListener('click', operadorMultiplicacion);
document.querySelector('#sblDividir').addEventListener('click', operadorDividir);

    //OTROS OPERADORES
document.querySelector('#sblIgual').addEventListener('click', mostrarResultado);



//FUNCIONES ////

    //HACER QUE LOS NUMEROS APAREZCAN EN EL DISPLAY
function n1 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n1').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n2 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n2').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n3 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n3').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n4 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n4').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n5 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n5').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n6 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n6').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n7 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n7').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n8 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n8').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n9 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n1').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function n0 () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#n0').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}

    //VINCULAR LOS OPERADORES MATEMATICOS PARA QUE SE VISUALICEN EN EL DISPLAY
function operadorSuma () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#sblMas').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function operadorResta () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#sblMenos').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function operadorMultiplicacion () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#sblMultiplicar').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}
function operadorDividir () {
    let actual = document.querySelector('#resultado').innerHTML;
    let sumado = document.querySelector('#sblDividir').innerHTML;
    document.querySelector('#resultado').innerHTML = actual + sumado;
}

    //VINCULAR EL RESULTADO AL BOTON DE IGUAL
function mostrarResultado () {
    let actual = document.querySelector('#resultado').innerHTML;
    let suma = actual.indexOf('+');
    let resta = actual.indexOf('-');
    let dividir = actual.indexOf('÷');
    let mult = actual.indexOf('x');

    //HACER LA OPERACIONES MATEMATICAS

    if (suma !== -1){
        arr = actual.split("+",2);
        res = parseInt(arr[0]) + parseInt(arr[1]);
        document.querySelector('#resultado').innerHTML = res;
    } else if (resta !== -1){
        arr = actual.split("-",2);
        res = arr[0] - arr[1];
        document.querySelector('#resultado').innerHTML = res;
    } else if (dividir !== -1){
        arr = actual.split('÷',2);
        res = arr[0] / arr[1];
        document.querySelector('#resultado').innerHTML = res;
    } else if (mult !== -1){
        arr = actual.split('x',2);
        res = arr[0] * arr[1];
        document.querySelector('#resultado').innerHTML = res;
    }

}
