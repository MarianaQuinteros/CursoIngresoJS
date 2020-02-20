function mostrar()
{

	var contador=0;
	var acumulador=0;
	var  numeros=0

	//ingreso primer numero
	
		while(contador<=4)  {

		contador++;
		numeros= prompt("INGRESE UN NÙMERO");
		

		console.log(numeros);

		//validar
		numeros=parseInt(numeros);

		while (isNaN(numeros)) {
			numeros=prompt("ingrese numero valido");
			numeros=parseInt(numeros);

		}
		//acumulamos

		acumulador+=numeros;
		
	}
	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN