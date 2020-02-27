/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
    var coloelegido;
    var random;
    var min=1;
    var max=7;

    tiempoInicio= new Date() ;

    random= Math.floor(Math.random()*(max-min))+min;

    switch (random) {
        case 1:
            ColorSecreto="azul";
            //Document.getElementById("ColorElejido").style.color = "red";
            
            break;
        case 2:
            ColorSecreto="amarillo";
            break;
        case 3:
            ColorSecreto="marrón";
            break;     
        case 4:
            ColorSecreto="celeste";
            break;
        case 5:
            ColorSecreto="verde"
            break;
            
    }

    document.getElementById("ColorElejido").value= ColorSecreto;

	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    
    var tiempofinal=new Date() ;
    var tiempototal;

    console.log(tiempofinal);
   

    tiempototal = tiempofinal - tiempoInicio;

   

    tiempototal=tiempototal/1000;
    console.log(tiempototal);
    
    console.log(colorParametro);
    console.log ( ColorSecreto);
    
    if (colorParametro == ColorSecreto) {

        console.log("GANO");
        alert("GANÓ Y TARDÓ "+ tiempototal +" SEGUNDOS");
        
    }else {
        alert ("intente otra vez");
        
    }
    var otro = confirm ("desea continuar?");
    if (otro) {
        comenzar()
    }
   

 

}//FIN DE LA FUNCIÓN
