function mostrar()
{

var clave = prompt("ingrese el número clave.");
var contador=0

//while si clave!= utn750 volver a intentar

    while(clave.toLowerCase()!="utn750" ) {

   
        contador++

         if(contador == 3) {
             break;
             }

           clave = prompt("ERROR!!!! ingrese el número clave.");
        
    }

    if (contador == 3){
        alert ("Número máximo de intentos.");
    } else {
        alert("CLAVE CORRECTA");
        console.log(clave);
    } 




}//FIN DE LA FUNCIÓN
