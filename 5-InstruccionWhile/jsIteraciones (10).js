function mostrar()
{

	var contador=0;
	var respuesta=true;
	var positivos
	var negativos
	var ceros
	var acumuladorN
	var acumuladorP
	var contadorP
	var contadorN
	var contadorceros
	var contadorpares
	var promediop
	var promedioN
	var difertenciaentrePyN

	//declarar contadores y variables 
	
	while (respuesta) {
		var numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		while(isNaN(numero)){
		numero=prompt("ERROR, ingrese un numero valido");
		numero = parseInt (numero)

		do{
			numero=prompt("ERROR, ingrese un numero valido");
		numero = parseInt (numero);
		}while (isNaN(numero)){


		}

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
				if 
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




}

document.write("La suma de los Negativos es: "+ acumuladorN+ "<br>");
document.write

}	//FIN DE LA FUNCIÓN