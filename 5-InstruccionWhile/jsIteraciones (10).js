function mostrar()
{
/*
	var contador=0;
	var respuesta=true;
	var positivos
	var negativos
	var ceros = 0
	var acumuladorN = 0
	var acumuladorP = 0
	var contadorP = 0
	var contadorN = 0
	var contadorceros = 0
	var contadorpares = 0
	var promediop
	var promedioN
	var difertenciaentrePyN

	//declarar contadores y variables 
	
	while (respuesta) {
				
		do{
			numero=prompt("ERROR, ingrese un numero valido");
		numero = parseInt (numero);
		}while (isNaN(numero))


		

		//CALCULOS	
		//positivos
		if (numero>=0) {
			positivo=numero;
			//punto 2
			acumuladorP+=positivos;
			//punbto 3
			contadorP++

		}else {
			//negativos
			if (numero <0) {
				negativo=numero;
				//punto 1
				acumuladorN+=negativos
				//punto 4
				contadorN++
			} else {
				contadorceros++
			}
		}
		//punto 6
		if (numero % 2 == 0) {
			contadorpares++
		}
		//punto 7
		if (contadorP != 0) { 
			promediop=acumuladorP/ contadorP;
		}
		//punto 8 
		if (contadorN != 0) {
			promedioN= acumuladorN/contadorN;
		}
		//punto 9
		difertenciaentrePyN= acumuladorP-acumuladorN


	
	}
	respuesta=confirm("Desea continuar?");
	

document.write("La suma de los Negativos es: "+ acumuladorN+ "<br>");
document.write("La suma de los Numeros Positivos es:"+acumuladorP+"<br>");
document.write("Hay "+contadorP+" Numeros Positivos"+"<br>");
document.write("Hay"+ contadorN+"Numeros Negativos"+"<br>");

*/
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
 2-Suma de los positivos. 
 3-Cantidad de positivos. 
 4-Cantidad de negativos. 
 5-Cantidad de ceros. 
 6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos).
*/
var numeros;
var positivo;
var negativos;
var acumuladorP = 0;
var acumuladorN = 0;
var contadorP = 0;
var contadorN = 0;
var promediop;
var promedioN;
var contadorceros = 0;
var respuesta=true;
var pares = 0;
var DiferenciaPyN;
while(respuesta) {
	numeros=prompt("INGRESE UN NUMERO");
	numeros=parseInt(numeros);

	while (isNaN(numeros)) {
		numero=prompt("INGRESE NUMERO VALIDO");
		numeros=parseInt(numeros);
	}

	if (numeros<0) {
		//suma negativos
		acumuladorN+=numeros;
		//cant de negativps
		acumuladorP++;
	}else {
		if (numeros>0) {
			//suma de positivos
			acumuladorP=+numeros;
			//cant de positivos
			contadorP++;
			//contar los ceros
		} else {
			if (numeros== 0)
			contadorceros++
		}
	}

	if (numeros % 2 == 0) {
		//cant numeros pares
		pares++;
	}
	
	if (contadorP != 0) {
		//promedio de positivos
		promediop = acumuladorP/contadorP;
	}

	if (contadorN != 0) {
		//promedio negativos
		promedioN= acumuladorN/contadorN;
	}

	DiferenciaPyN = acumuladorP-acumuladorN;


	respuesta=confirm("DESEA CONTINUAR?");

}


document.write("Suma de los negativos: "+ acumuladorN  +"<br>");
document.write("Suma de los positivos: " + acumuladorP + "<br>");
document.write("Cantidad de positivos: " + contadorP + "<br>");
document.write("Cantidad de negativos: " + contadorN + "<br>");
document.write("Cantidad de ceros: "+ contadorceros + "<br>");
document.write("Cantidad de números pares: " + pares + "<br>");
document.write("Promedio de positivos: " + promediop + "<br>");
document.write("Promedios de negativos: " + promedioN + "<br>");
document.write("Diferencia entre positivos y negativos: " + DiferenciaPyN + "<br>");







}	//FIN DE LA FUNCIÓN