function mostrar()
{
    /*Realizar el algoritmo que permita ingresar el nombre de un estudiante, 
    la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/
    var nombre;
    var edad;
    var sexo;
    var notafinal;
    var respuesta=true;
    var varonesaprobados=0;
    var acumuladornotasmenores=0;
    var acumuladornotasadolescentes=0;
    var acumuladornotasmayores=0;
    var acumuladorpromediof=0;
    var acumuladorpromediom=0;
    var cantfem=0;
    var cantmasc=0;
    var cantmayores=0;
    var cantmenores=0;
    var cantadolescentes=0;
    var promediofem;
    var promediomasc;
    var promediomenores;
    var promediomayores;
    var promedioadolescentes;

    while (respuesta) {

        do {
            nombre = prompt ("INGRESE NOMBRE");
            
        }while (!isNaN(nombre));

        do {
            edad = prompt("INGRESE EDAD");
            edad=parseInt(edad);

        }while (isNaN(edad) || edad<0);

        do {
            sexo = prompt ("INGRESE SEXO DEL ALUMNO (f o m)");
            
        }while (!isNaN(sexo) || sexo !="f" && sexo != "m");

        do {
            notafinal = prompt("INGRESE NOTA FINAL");
            notafinal= parseInt(notafinal);
            
        } while (isNaN(notafinal) || notafinal<=0 || notafinal >10);
                 
         //termino validacion.

         //a) La cantidad de varones aprobados

        if (sexo == "m" && notafinal>6){
             varonesaprobados++
         }

         //b) El promedio de notas de los menores de edad

        if (edad<14) {
             acumuladornotasmenores+=notafinal
             cantmenores++;
         } else {
             if (edad>=18) {
             //d) El promedio de notas de los mayores
             acumuladornotasmayores+=notafinal;
             cantmayores++;
            } else {
                //c) El promedio de notas de los adolescentes.
                acumuladornotasadolescentes+=notafinal;
                cantadolescentes++;
                } 
             }

            //f) El promedio de notas por sexo masculino y femenino

        if (sexo == "f") {
            acumuladorpromediof+=notafinal;
            cantfem++
            }else {
                acumuladorpromediom+=notafinal;
                cantmasc++;
                }
            
             
            respuesta= confirm("DESEA CONTINUAR?")
    
    
    }

    //f) El promedio de notas por sexo masculino y femenino
    
    promediofem = acumuladorpromediof / cantfem;

    promediomasc = acumuladorpromediom / cantmasc;

    promediomenores = acumuladornotasmenores / cantmenores;

    promedioadolescentes = acumuladornotasadolescentes / cantadolescentes;

    promediomayores = acumuladornotasmayores / cantmayores;

    //informar por document write

    document.write ("La cantidad de varones aprobados es: "+varonesaprobados+"<br>");
    document.write ("El promedio de notas de los menores de edad es: "+promediomenores+"<br>");
    document.write ("El promedio de notas de los adolescentes es: "+ promedioadolescentes+"<br>");
    document.write ("El promedio de notas de los mayores es: "+ promediomayores+"<br>");
    document.write ("El promedio de notas por sexo masculino es: "+ promediomasc+ "<br>");
    document.write ("El promedio de notas por sexo femenino es: "+promediofem+"<br>");





}
