

function calcularIMC (event){

    event.preventDefault();

    const name  = document.getElementById("altura");
    const altura = name.value;

    const name2 = document.getElementById("peso");
    const peso = name2.value;
    
    

    const imc = peso/(altura * altura).toFixed(1)
    
    
    if (imc < 16.9 ){
        document.getElementById("resultado").innerHTML =imc.toFixed(1) +" Muito abaixo do peso!";
    }else
    if (imc > 16.9 && imc <= 18.4){
        document.getElementById("resultado").innerHTML = imc.toFixed(1) + " abaixo do peso!";
    }else
    if (imc > 18.4 && imc <= 24.9)
    {
        document.getElementById("resultado").innerHTML =imc.toFixed(1) +" Peso normal";
    }
    else
    if (imc >24.9 && imc <=29.9){
        document.getElementById("resultado").innerHTML =imc.toFixed(1) + " Acima do peso!";
    }else
    if (imc >29.9 && imc <= 34.9)
    {
        document.getElementById("resultado").innerHTML =imc.toFixed(1) +" Obesidade Grau 1!";
    }
    else
    if (imc > 34.9 && imc <=40){
        document.getElementById("resultado").innerHTML=imc.toFixed(1) +" Obesidade Grau 2!";
    }else
    if (imc > 40)
    {
        document.getElementById("resultado").innerHTML =imc.toFixed(1) + " Obesidade Grau 3";
    }
}