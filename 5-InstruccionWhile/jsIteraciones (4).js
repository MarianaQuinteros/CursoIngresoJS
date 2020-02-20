function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	var contador= 0;

	//parselo
	numero= parseInt(numero);

		//while  
	while(numero>=10 || numero <0 || isNaN(numero))  {

		contador++;

		if (contador>=3) {
			break;
		}
		
		numero = prompt("ERROR, INTENTE NUEVAMENTE.");
		
	}
	if (contador ==3){
        alert ("Número máximo de intentos.");
    } else {
		document.getElementById("Numero").value=numero;

		}


}//FIN DE LA FUNCIÓN