function mostrar()
{
//tomo la edad  
var edad;

//ingreso datos

edad=document.getElementById("edad").value;

//parselo edad

edad=parseInt(edad);

//if
if (edad<=17 && edad>=13) {

}else {
    alert ("NO ES ADOLESCENTE");
}

}//FIN DE LA FUNCIÓN