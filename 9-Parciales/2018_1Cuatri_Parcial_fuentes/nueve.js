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
    var peso;
    var temperatura;
    var marca;
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
            peso = prompt("INGRESE PESO ENTRE 0 Y 100");
            peso = parseInt(peso);
            
        }while (isNaN(peso) || peso>101);

        do {
            temperatura = prompt("INGRESE LA TEMPERATURA DE ALMACENAMIENTO (ENTRE -30 Y 30)");
            temperatura = parseInt(temperatura);

        }while (isNaN(temperatura) || temperatura > 30 || temperatura < -30);

        do {
            marca = prompt("INGRESE MARCA");

        }while (!isNaN(marca));

        //La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            temperaturapar++
        }

        //La marca del producto más pesado
        if (primerpeso) {
            primerpeso = false;
            maximopeso = peso;
            maximomarca= marca;
            minimopeso=peso
        }else {
            //El peso máximo y el mínimo.
            if (maximopeso>peso) {
                peso = maximopeso;
                marca = maximomarca;
            } 
            if (minimopeso<peso) {
                minimopeso = peso;
            }
        }

        //La cantidad de productos que se conservan a menos de 0 grados. 
        if (temperatura<0) {
            productoscongelados++

        }
        //El promedio del peso de todos los productos.
        acumuladorpeso += peso;
        contador++

        if (contador!=0) {
            promediopeso= acumuladorpeso/contador;
        }

        
        respuesta=confirm("DESEA CONTINUAR?");
    }

    alert ("La cantidad de temperaturas pares es: "+ temperaturapar);
    alert ("La marca del producto más pesado es: "+maximomarca);
    alert ("La cantidad de productos que se conservan a menos de 0 grados es:"+ productoscongelados);
    alert ("El promedio del peso de todos los productos es: "+ promediopeso);




}
