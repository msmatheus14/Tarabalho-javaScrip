var milesimo = 0
var segundo = 0
var minuto = 0


function iniciar() {
    
var interv = setInterval(relogio, 10);

}

function pausar() {

    
    clearInterval(interv);
   
}

function reiniciar() {

    clearInterval(interv);
        milesimo = 0
        segundo = 0
        minuto = 0
    
}

function relogio() {
   
    milesimo++
    if(milesimo == 100)
    {
        segundo++
        milesimo = 0
        if (segundo == 60)
        {
            minuto++
            segundo = 0
            
        }

    }

    document.getElementById('tempo').innerText = minuto +':'+ segundo + ':' + milesimo
    
   
}
