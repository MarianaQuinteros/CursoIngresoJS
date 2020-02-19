function mostrar()
{
//tomo la edad  

var edad;

//ingreso datos

edad=document.getElementById("edad").value;

//parselo edad

edad=parseInt(edad);

//if
if (edad >= 13 && edad <=17) {
    alert ("ADOLESCENTE");
}


}//FIN DE LA FUNCIÓN