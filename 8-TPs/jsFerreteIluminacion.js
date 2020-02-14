/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
var cantidadLamparas;
var Marcalamparas;
var descuento;
var preciolamparas
function CalcularPrecio () 
{ 
    //cargar datos

    cantidadLamparas=document.getElementById("Cantidad").value;
    Marcalamparas=document.getElementById("Marca").value;
    document.getElementById("precioDescuento").value=descuento;
    //parselar
    cantidadLamparas=parseInt(cantidadLamparas);
    preciolamparas=parseInt(preciolamparas)

    //precio lamparas
    preciolamparas=35

    //if
    //ejercicio a
    if (cantidadLamparas >= 6) {

        //imprimir descuento 50%

        descuento= (50*preciolamparas*cantidadLamparas/100);
    } else{
            //ejercicio b
            //si compra 5 y no son argluz hacer 30 de descuento
        if (cantidadLamparas == 5 && Marcalamparas != "ArgentinaLuz"){

            //imprimo precio con descuento
            descuento= (70*preciolamparas*cantidadLamparas/100);
         }

         //si son argluz hacer 40 %
         if (Marcalamparas == "ArgentinaLuz") {

                //imprimo precio con descuento

            descuento= (60*preciolamparas*cantidadLamparas/100);
         }else{ 

            // ejercicio c 
            //si compra 4 lamparas y son marca arg luz o felipe, hacer 25%

            if (cantidadLamparas == 4 && (Marcalamparas=="ArgentinaLuz" || Marcalamparas == "FelipeLamparas")){

                //imprimo precio con descuento

                descuento= (75*cantidadLamparas*preciolamparas/100);
            } 
                    //si compra 4 lamparas y no son argluz o felipe hcaer 20%

                if (cantidadLamparas == 4 && (Marcalamparas!="ArgentinaLuz" || Marcalamparas != "FelipeLamparas")){

                    //imprimo precio con descuento
                descuento= (80*cantidadLamparas*preciolamparas/100);

                }else{
                        //si compra 3 lamparas
                    if (cantidadLamparas == 3 ){
                        //y son argluz hacer 15% descuento
                        if (Marcalamparas=="ArgentinaLuz"){
                            //imprimo precio descuento

                        descuento=(85*cantidadLamparas*preciolamparas/100);
                        }else {
                            //si son felipe
                             if(Marcalamparas== "FelipeLamparas"){

                            //imprimo descuento de 10%
                            descuento= (90*cantidadLamparas*preciolamparas/100);
                            }else{
                                descuento= (95*cantidadLamparas*preciolamparas/100);
                            }
                        }

                    
                    }
                }
            }

        }

    
    }    
 	

}






{
    var cantidadLamparas;
    var Marcalamparas;
    var descuento;
    var preciolamparas;


    //cargo datos
    cantidadLamparas=document.getElementById("Cantidad").value;
    Marcalamparas=document.getElementById("Marca").value;
    document.getElementById("precioDescuento").value=descuento;
    //parselar
    cantidadLamparas=parseInt(cantidadLamparas);
    preciolamparas=parseInt(preciolamparas)

    //ejercicio A 

    if (cantidadLamparas>=6){
          descuento=0.5;

        }else{
            if (cantidadLamparas==5){
                if (Marcalamparas=="Argentinaluz"){
                    descuento=0.4;
                }else{
                    descuento=0.3;
                }
            }else{
                if (cantidadLamparas==4){
                    if (Marcalamparas=="Argentinaluz" || Marcalamparas=="FelipeLamparas"){
                        descuento=0.25
                    }else{ 
                        descuento=20
                    }
                    } else{
                        if (cantidad==3){
                            if (Marcalamparas=="ArgentinaLuz"){
                                descuento==0.15
                            }else{
                                if (Marcalamparas=="FelipeLamparas"){
                                    descuento=0.1
                                }else{
                                    descuento=0.05
                                }
                            }
                        }
                        
                    }

                }
            }
        }
    }
    
    









}