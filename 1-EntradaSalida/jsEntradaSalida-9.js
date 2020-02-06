/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldoingresado;
    var sueldoReal;
    var resultado;

    //ingresar datos id
    sueldoingresado=document.getElementById("sueldo").value;

    //parselar
    sueldoReal=parseInt(sueldoingresado);

    //agregar 10%
    resultado=110*sueldoReal/100;

    //alert
    document.getElementById("resultado").value=resultado;
   
   
    
	
}
