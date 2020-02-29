function mostrar()
{
/*
    /*Realizar el algoritmo que permita ingresar la marca 
    del producto, el peso el cual debe ser entre 1 y 100 (validar),
    la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos.	
f) El peso máximo y el mínimo.*/
 
    /*

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

*/


/*
)Para la gestión de un hotel,
ingresar los siguientes datos validados de una reserva
nombre del huésped
cantidad de personas 
cantidad de dia de estadia 
forma de pago(efectivo , tarjeta o QR)

informar el huésped que trajo más personas en una sola reserva.
la cantidad de personas que se quedaron más días
la forma de pago más utilizada.
el promedio de cantidad de días por reserva */


    var nombre;
    var cantpersonas;
    var cantdias;
    var formadepago;
    var respuesta=true;
    var acumuladordias=0;
    var maxpersonas;
    var maxdias;
    var primeravez=true;
    var contadorefectivo=0;
    var contadorqr=0;
    var contadortarjeta=0;
    var maxnombre;
    var maxdiaspers;
    var contadorreservas=0;
    var promedio;
    

    while (respuesta) {

        do {
        nombre = prompt ("INGRESE NOMBRE DEL HUESPED");
    
        } while (nombre == "");

        do {
         cantpersonas = prompt("INGRESE CANTIDAD DE PERSONAS A HOSPEDARSE");
         cantpersonas = parseInt(cantpersonas)
        
        } while (isNaN (cantpersonas) || cantpersonas<0);

        do {
            cantdias = prompt("INGRESE CANTIDAD DE DIAS DE ESTADIA");
            cantdias = parseInt(cantdias);
            acumuladordias += cantdias;
        
        } while (isNaN(cantdias)) ;

        
        do {
            formadepago= prompt("INGRESE FORMA DE PAGO");        
      
        }while (!isNaN(formadepago) ||   formadepago != "efectivo" && formadepago !="qr" && formadepago != "tarjeta" );

        //aca empieza el ejercicio
        //cuento las cant de veces que se usa cada forma de pago
       

        /*if (formadepago== "efectivo"){
            contadorefectivo++;
        }else {
            if (formadepago== "qr") {
                contadorqr++;
         }else {
                contadortarjeta++;
            }
        }
*/ //TAMBIEN SE SPUEDE HACER EN SWITCH
        switch(formadepago) {
            
            case ("efectivo"):
                contadorefectivo++;
                break;
            case ("qr"):
                contadorqr++;
                break;
            case ("tarjeta"):
                contadortarjeta++;
                break;

        }

          //informar el huésped que trajo más personas en una sola reserva
        if (primeravez) {
            primeravez = false
            maxpersonas = cantpersonas;
            maxnombre = nombre;
            maxdias = cantdias;
            maxdiaspers=cantpersonas

        }
        if (cantpersonas>maxpersonas) {
            maxpersonas=cantpersonas;
            maxnombre=nombre;
        }

        //la cantidad de personas que se quedaron más días
        
        if (cantdias> maxdias) {
            maxdias = cantdias;
            maxdiaspers=cantpersonas;

        }
        contadorreservas++
        respuesta= confirm("DESEA CONTINUAR?");

                
    }

       
    //el promedio de cantidad de días por reserva 
    promedio= acumuladordias / contadorreservas

     //la forma de pago más utilizada.

    if (contadorefectivo > contadortarjeta && contadorefectivo >contadorqr) {
            document.write ("La forma de pago mas utilizada es EFECTIVO"+"<br>");

        }else {
            if (contadortarjeta > contadorqr) {
                document.write("La forma de pago mas utilizada es TARJETA"+"<br>"); 
                } else{ 

                    document.write ("La forma de pago mas utilizada es QR"+"<br>"); 
                        
                  }
              }
         
                       
                                  
    
    document.write ("el promedio de cantidad de días por reserva es:" + promedio+ "<br>") ;   
    document.write (maxdiaspers+" personas quedaron el maximo de días que es: "+maxdias+"<br>");
    document.write (maxnombre+" trajo mas personas en una sola reserva, fueron: "+ maxpersonas+ "<br>");  


    
 }
