/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //declaracion de variables
    var numero1;
    var numero2;
    var resultado;
    var entero1;
    var entero2;

    //obtener los valores id
    numero1=document.getElementById("numeroUno").value;

    numero2=document.getElementById("numeroDos").value;

    //convertir datos en enteros
    entero1=parseInt(numero1);

    entero2=parseInt(numero2)

    //suma
    resultado=entero1+entero2;
    
        //mostrar resultado
    alert("La suma es "+resultado);


}

