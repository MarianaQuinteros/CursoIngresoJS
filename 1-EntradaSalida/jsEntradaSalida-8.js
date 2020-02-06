/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numero1;
    var numero2;
    var dividendo;
    var divisor;
    var resto;

    //ingresar datos id
    numero1=document.getElementById("numeroDividendo").value;
    numero2=document.getElementById("numeroDivisor").value;

    //parselar
    dividendo=parseInt(numero1);
    divisor=parseInt(numero2);
    console.log(dividendo,divisor);

    //dividir
    resto=dividendo%divisor;
    console.log(resto)
    //alert
    alert("El Resto es "+resto);

	
}
