function mostrar()
{
//tomo la edad  

var edad;

//ingreso datos

edad= document.getElementById("edad").value;

//parselo edad

edad=parseInt(edad);

//if
if (edad>=18) {
    alert("MAYOR DE EDAD");
}


}//FIN DE LA FUNCIÓN