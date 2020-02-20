function mostrar()

{

	var maximo = 0;
	var minimo = 0;
	var respuesta = true;
	var numero;
	var contador= 0;
	//hay que poner una bandera
	var primeraiteracion=true;

while(respuesta){

	numero= prompt("ingrese un numero");
	numero=parseInt(numero);
	
	while (isNaN(numero)) {
		numero=parseInt(numero);

	}

	//calculo
	//cuando la bandera sea verdadera...
	if (primeraiteracion) {
		//tengo que hacer que la bandera sea false para siempre
		primeraiteracion=false;
		maximo = numero;
		minimo = numero;
	}else{
		//a partir de la 2 iteracion
		if (numero > maximo) {
			maximo = numero;
		}

		if (numero< minimo) {
			minimo=numero;
		}
	}
	respuesta=confirm("Desea continuar?");
}

document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;



























/*{

	var contador=0;
	var maximo = 0;
	var minimo = 0;
	var respuesta = true;
	var numero;
	// declarar variables

		while (respuesta) {

			numero = prompt("Ingrese un número.");
			//parselar
			numero =parseInt(numero);
			while (isNaN(numero)) {
				numero = prompt("ERROR!ingrese un número válido.");
				numero =parseInt(numero);

			}

			//operaciones

			
		})
	
	
	var respuesta='si';

	while(respuesta!='no')
	{
		
	
	}

document.getElementById("Maximo").value= maximo




*/
	
	


}//FIN DE LA FUNCIÓN
