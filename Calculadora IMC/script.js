

function calcularIMC (event){

    event.preventDefault();

    const name  = document.getElementById("altura");
    const altura = name.value;

    const name2 = document.getElementById("peso");
    const peso = name2.value;
    
    

    const imc = peso/(altura * altura).toFixed(0)
    
    
    if (imc < 16.9 ){
        document.getElementById("resultado").innerHTML =imc +" Muito abaixo do peso!";
    }else
    if (imc > 16.9 && imc <= 18.4){
        document.getElementById("resultado").innerHTML = imc + " abaixo do peso!";
    }else
    if (imc > 18.4 && imc <= 24.9)
    {
        document.getElementById("resultado").innerHTML =imc +" Peso normal";
    }
    else
    if (imc >24.9 && imc <=29.9){
        document.getElementById("resultado").innerHTML =imc + " Acima do peso!";
    }else
    if (imc >29.9 && imc <= 34.9)
    {
        document.getElementById("resultado").innerHTML =imc +" Obesidade Grau 1!";
    }
    else
    if (imc > 34.9 && imc <=40){
        document.getElementById("resultado").innerHTML=imc +" Obesidade Grau 2!";
    }else
    if (imc > 40)
    {
        document.getElementById("resultado").innerHTML =imc + " Obesidade Grau 3";
    }
}