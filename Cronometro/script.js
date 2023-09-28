var milesimo = 0
var segundo = 0
var minuto = 0
var interv

function iniciar() {
    
    interv = setInterval(relogio, 10);
    var bt = document.getElementById('iniciar');
    bt.disabled = true;

}

function pausar() {

    
    clearInterval(interv);
    var bt = document.getElementById('iniciar');
    bt.disabled = false;
    
   
}  

function reiniciar() {

    clearInterval(interv);
        milesimo = 0
        segundo = 0
        minuto = 0


        document.getElementById('tempo').innerText = minuto +':'+ segundo + ':' + milesimo
    
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
