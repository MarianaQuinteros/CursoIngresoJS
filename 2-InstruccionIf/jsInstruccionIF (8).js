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

if (estadocivil=="Soltero" && edad>=18) {
    alert("Es soltero y no es menor.");
}
	


}//FIN DE LA FUNCIÓN