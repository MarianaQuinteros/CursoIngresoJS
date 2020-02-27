/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var temporizador;
var numero1;
var numero2;
var operador;
var operadorrandom;
function comenzar()
{
   
    numero1= Math.floor(Math.random()*(11-1)) + 1;
    numero2= Math.floor(Math.random()*(11-1)) + 1;

    operadorrandom=Math.floor(Math.random()*(5-1)) + 1;
    


    switch(operadorrandom) {
        case 1:
            operador = "+";
            break;
        case 2: 
            operador = "-";
            break;
        case 3:
            operador = ("*");
            break;
        case 4:
            operador = ("/");
            break;
        default:
            break;
    }



}//FIN DE LA FUNCIÓN
function Responder()
{
    var respuestafinal;

    respuesta = document.getElementById("Respuesta").value;

    respuesta = parseInt(respuesta);

    switch(operadorrandom) {
        case 1:
            resultadofinal = numero1 + numero2;
            break;
        case 2: 
            resultadofinal = numero1 - numero2;
            break;
        case 3:
            resultadofinal = numero1* numero2;
            break;
        case 4:
            resultadofinal = numero1 / numero2;
            break;
        default:
            break;
    }

    if (resultadofinal == respuesta) {
        alert ("GANÓ");
        comenzar()
        document.getElementById("Respuesta") == 0;
    }else {
        alert ("PERDIÓ");
    }
    


}//FIN DE LA FUNCIÓN
