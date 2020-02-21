function mostrar()
{

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



}	//FIN DE LA FUNCIÓN