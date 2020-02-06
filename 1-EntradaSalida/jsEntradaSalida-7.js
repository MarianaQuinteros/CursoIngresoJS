/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var numero1;
    var numero2;
    var entero1;
    var entero2;
    var suma;

    //obtener valores id
    numero1= document.getElementById("numeroUno").value;
    numero2= document.getElementById("numeroDos").value;
    console.log(numero1,numero2)
    //parselar 
    entero1=parseInt(numero1);

    entero2=parseInt(numero2);

    //suma
    suma=entero1+entero2;
    
    //alert
    alert("La suma es "+suma);
}

function restar()
{
    var numero1;
    var numero2;
    var entero1;
    var entero2;
    var resta;

    //obtener valores id
    numero1= document.getElementById("numeroUno").value;
    numero2= document.getElementById("numeroDos").value;
    console.log(numero1,numero2);

    //parselar 
    entero1=parseInt(numero1);

    entero2=parseInt(numero2);

    //resta
    resta=entero1-entero2;
    
    //alert
    alert("La resta es "+resta);

	
}

function multiplicar()
{ var numero1;
    var numero2;
    var entero1;
    var entero2;
    var multiplicar;

    //obtener valores id
    numero1= document.getElementById("numeroUno").value;
    numero2= document.getElementById("numeroDos").value;
    console.log(numero1,numero2);
    
    //parselar 
    entero1=parseInt(numero1);

    entero2=parseInt(numero2);

    //multiplicacion
    multiplicar=entero1*entero2;
    
    //alert
    alert("La multiplicación es "+multiplicar);
	
}

function dividir()
{
    var numero1;
    var numero2;
    var entero1;
    var entero2;
    var dividir;

    //obtener valores id
    numero1= document.getElementById("numeroUno").value;
    numero2= document.getElementById("numeroDos").value;
    console.log(numero1,numero2);

    //parselar 
    entero1=parseInt(numero1);

    entero2=parseInt(numero2);

    //division
    dividir=entero1/entero2;
    
    //alert
    alert("La división es "+dividir);
	
}

