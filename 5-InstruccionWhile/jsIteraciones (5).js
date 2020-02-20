function mostrar()
{

var sexo = prompt("ingrese f ó m .");


    while(sexo.toLowerCase() != "m" && sexo.toLocaleLowerCase() != "f") {
        
        sexo = prompt("ERROR!!!!! ingrese f ó m .");
    }
        if (sexo.toLowerCase()== "f") {
            document.getElementById("Sexo").value = ("FEMENINO");

        }else {
            
            document.getElementById("Sexo").value = ("MASCULINO")


        }
        
       

}//FIN DE LA FUNCIÓN