function mostrar()
{
//tomo la edad  
var edad;
var estadocivil;
//ingreso datos

edad=document.getElementById("edad").value;
estadocivil= document.getElementById("estadoCivil").value;

//parselo edad

edad=parseInt(edad);

//if
if (estadocivil=="Soltero") {

}else {
    if (edad<=18) {
        alert("Es muy pequeño para NO ser soltero");
    }
}
	


}//FIN DE LA FUNCIÓN