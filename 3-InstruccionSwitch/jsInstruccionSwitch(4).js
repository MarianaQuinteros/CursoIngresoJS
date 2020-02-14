function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch(mesDelAño)
{
    
    case "Febrero":
        alert("si tiene 28 días");
        break;
    case "Abril":
        alert("si tiene 30 días.");
        break;
    case "Junio":
        alert("si tiene 30 días.");
        break;
    case "Septiembre":
        alert("si tiene 30 días.");
        break;
    case "Noviembre":
        alert("si tiene 30 días.");
        break;
    default:
        alert("si tiene 31 días.");
        break;

}	



}//FIN DE LA FUNCIÓN