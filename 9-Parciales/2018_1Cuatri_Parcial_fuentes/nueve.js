function mostrar()
{

    /*Realizar el algoritmo que permita ingresar la marca 
    del producto, el peso el cual debe ser entre 1 y 100 (validar),
    la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/


    var respuesta = true;

    //tomar datos
    var peso;
    var temperatura;
    var marca;
    
    //resolver el ejercicio
    var temperaturapar=0;
    var maximopeso;
    var maximomarca;
    var primerpeso=true 
    var minimopeso;
    var productoscongelados=0;
    var acumuladorpeso=0;
    var promediopeso;
    var contador=0;


    while(respuesta) {

        do {
            marca = prompt("INGRESE MARCA");

        }while (marca == "");
        
        do {
            peso = prompt("INGRESE PESO ENTRE 0 Y 100");
            peso = parseInt(peso);
            
        }while (isNaN(peso) || peso > 101 || peso < 0);

        do {
            temperatura = prompt("INGRESE LA TEMPERATURA DE ALMACENAMIENTO (ENTRE -30 Y 30)");
            temperatura = parseInt(temperatura);

        }while (isNaN(temperatura) || temperatura > 31 || temperatura < -31);

        

        //La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            temperaturapar++;
        } else {
            if (temperatura == 0) {
                temperaturapar++
            }
        }

        //La marca del producto más pesado
        if (primerpeso) {
            primerpeso = false;
            maximopeso = peso;
            maximomarca= marca;
            minimopeso=peso;
        }else {
            //El peso máximo y el mínimo.
            if (maximopeso<peso) {
                maximopeso = peso;
                maximomarca = marca;
            } else {
        
                 if (minimopeso<peso) {
                    minimopeso = peso;
                }
            }
        }

        //La cantidad de productos que se conservan a menos de 0 grados. 
        if (temperatura<0) {
            productoscongelados++;

        }
        //El promedio del peso de todos los productos.
        acumuladorpeso += peso;
        contador++;

      
        
        respuesta=confirm("DESEA CONTINUAR?");
    }


    //PROMEDIO VA AFUERA DEL WHILE
    if (contador>0) {
        promediopeso= acumuladorpeso/contador;
    }else {
        promedio= 0 //cuando no ingresa ningun dato
    }


    document.write ("La cantidad de temperaturas pares es: "+ temperaturapar+"<br>");
    document.write ("La marca del producto más pesado es: "+maximomarca+"<br>");
    document.write ("La cantidad de productos que se conservan a menos de 0 grados es:"+ productoscongelados+"<br>");
    document.write ("El promedio del peso de todos los productos es: "+ promediopeso+"<br>");
    document.write  ("Peso Maximo: "+maximopeso+ "<br>"+"Peso minimo: " + minimopeso)



}
