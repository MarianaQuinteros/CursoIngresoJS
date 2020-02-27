function mostrar()
{

 /*Realizar el algoritmo que permita iterar 
 el ingreso de dos datos, una letra y un número 
entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write:

a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7) */

    var respuesta;
    var numero;
    var letra;
    var pares=0;
    var impares=0;
    var ceros=0;
    var acumuladorp=0;
    var acumulaorn=0;
    var max=100;
    var min=-100;
    var contador=0

    do {
        contador++
        //tomar y validar datos

        do {
            numero=prompt("ingrese numero");
            numero=parseInt(numero);

        }while (isNaN(numero) && numero>-101 && numero <101);

        do {
            letra= prompt("ingrese una letra");
            
        }while (!isNaN(letra));

        //HAsta aca validé

        //punto a

        if (numero % 2 == 0) {
            pares++;
            
        } else {
            //punto b
            impares++;
        }
            //punto c
        if (numero == 0) {
            ceros++;
        }

        //punto d
        if (numero>0) {
            acumuladorp+=numero;

        } else {
            acumulaorn+=numero;

        } 


        respuesta=confirm ("DESEA CONTINUAR?")

    }while (respuesta)

    document.write ("cantidad de numero pares: " +pares + "<br>");
    document.write ("cantidad de numeros impares: "+ impares+ "<br>");
    document.write ("cantidad de ceros: "+ ceros+ "<br>")
    document.write ("El promedio de todos los números positivos ingresados es: "+ acumuladorp/contador+ "<br>");
    document.write ("La suma de todos los números negativos es: "+ acumulaorn+ "<br>");
    //document.write ("")


}
