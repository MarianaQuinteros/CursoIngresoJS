function mostrar()
{

	var contador=0;
	var acumulador=0;
	var  numeros=0

	//ingreso primer numero
	
	

	while(contador<=4)  {

		contador++;
		numeros= prompt("INGRESE UN NÙMERO");
		
		//validar
		numeros=parseInt(numeros);

		while (isNaN(numeros)) {
			numero=prompt("ingrese numero valido");
			numero=parseInt(numero);
		}
		//acumulamos

		acumulador+=numeros;
		

	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN