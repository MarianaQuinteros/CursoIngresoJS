function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	
	
	var respuesta=true;
	
	while (respuesta) {

		var numero = prompt("Ingrese un número.");
		numero = parseInt(numero);
		//valido 
		while (isNaN(numero)){
			numero = prompt("Este no es un numero valido");
			numero = parseInt(numero);
		}

		//OPERACIONES
		if (numero >= 0) {
			positivo += numero;
			//positivo=positivo + numero
		} else{
			negativo*=numero;
			contador++
		}
		respuesta=confirm("Desea continuar?");
	}

	if (contador == 0) {
		negativo= 0;
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN