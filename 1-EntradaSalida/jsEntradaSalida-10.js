/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importeIngresado;
    var importeReal;
    var resultado;

    //traER datos ID
    importeIngresado=document.getElementById("importe").value;

    //parselar
    importeReal=parseInt(importeIngresado);
    console.log(importeReal);

    //aumento
    resultado=75*importeReal/100;
    console.log(resultado);
    
    //mostrar en resultado
    document.getElementById("resultado").value= resultado;


}
