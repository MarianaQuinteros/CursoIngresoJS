function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

laHora=parseInt(laHora);
if (laHora>25) {
    alert ("NO ES UNA HORA VÁLIDA")
}else{

            //alert (laHora);
            switch(laHora) {
                case 7:
                        alert("Es de mañana.")
                        break;
                case 8:
                        alert("Es de mañana.")
                        break;
                case 9:
                         alert("Es de mañana.")
                        break;
                case 10:
                        alert("Es de mañana.")
                        break;
                case 11:
                        alert("Es de mañana.")
                        break;
                default:
                    alert("Son las "+ laHora)




}
}



}//FIN DE LA FUNCIÓN