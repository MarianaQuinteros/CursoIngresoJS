function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	

	//parselo
	

		//while  
	while(numero>=10 || numero <0 || isNaN(numero))  {

		

		numero = prompt("ERROR, INTENTE NUEVAMENTE.");
		
		numero= parseInt(numero);
		
		

	}
		document.getElementById("Numero").value=numero;




}//FIN DE LA FUNCIÓN