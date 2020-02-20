function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeros=0
	var iterador

	iterador= prompt("cuantos numeros quiere ingresar?")

	//ingreso primer numero
	
	

	while(contador< iterador)  {

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