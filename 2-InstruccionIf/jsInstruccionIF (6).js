function mostrar()
{
//tomo la edad  
var edad;

//ingreso datos

edad=document.getElementById("edad").value;

//parselo edad

edad=parseInt(edad);

//if

if (edad<=13) {
    alert("ES UN NIÑO");
}else {
    if (edad>=18) {
        alert("ES UN ADULTO");
    }else {
        alert ("ES ADOLESCENTE");
    }
}



}//FIN DE LA FUNCIÓN