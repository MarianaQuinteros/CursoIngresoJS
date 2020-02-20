function mostrar()
{

var clave = prompt("ingrese el número clave.", "utn750");
var contador=0

//while si clave!= utn750 volver a intentar

    while(clave.toLowerCase!="unt750" && contador<3) {
        contador++

        
        clave = prompt("ERROR!!!! ingrese el número clave.");

        console.log(clave);
    } 

    if(contador==3) {
        alert ("Número máximo de intentos.")
    } else {
        alert("CLAVE CORRECTA");
    }


}//FIN DE LA FUNCIÓN
