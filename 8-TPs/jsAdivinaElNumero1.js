/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;
var numeroIngresado;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   
  numeroSecreto= Math.round(Math.random()*100)+1;
  console.log(numeroSecreto);

  //ingreso datos

  numeroIngresado=document.getElementById("numero").value;
  
  //parselo los intentos
  contadorIntentos=parseInt(contadorIntentos);

  
	
}

function verificar()
{ 
	//alert(numeroSecreto );
  contadorIntentos=contadorIntentos+1

  numeroIngresado=document.getElementById("numero").value;
    if (numeroIngresado==numeroSecreto) {
      
      contadorIntentos=1
      alert("USTED ES UN GANADOR!!"+" y en "+contadorIntentos+ " intentos.");

    }else{
      
     contadorIntentos  = (document.getElementById("intentos").value);
    }
	
}