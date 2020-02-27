function mostrar()

/*Realizar el algoritmo que permita el ingreso por prompt
 de las notas  (validar entre 0 y 10) ,
  el sexo (validar el sexo “f” o “m”) de 5 alumnos,
   informar por alert: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

{ 
    var notas=0;
    var sexo;
    var promedio;
    var notamasbaja=0;
    var contadorvaroles=0;
    var alumnos=0;
    var acumulador=0
    var sexonotabaja;
    

    while (alumnos<5) {

        alumnos++;

        do {
            notas = prompt("INGRESE UNA NOTA");
            notas = parseInt(notas);
            
            

        } while (isNaN(notas) || notas>10 || notas <0);

        

        do {
            sexo = prompt("INGRESE EL SEXO DEL ALUMNO: f o m");

        } while (sexo!="f" && sexo!="m");

        //punto a
        acumulador+=notas;
       

        //punto b
        if (contador == 1) {
            notamasbaja= notas;
            
        } else {
            if (nota< notamasbaja) {
                notamasbaja=nota
                sexonotabaja= sexo
            }
        }

        //punto c

        if (notas>=6 && sexo== "m") {
            contadorvaroles++

        }

    }
    

    promedio= acumulador/alumnos;
    alert (promedio);

    alert ("")











}
