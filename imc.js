
const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    if (nome !== '' && altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal. Parabéns!!!';  
        }else if(valorIMC < 30){
            classificacao = 'seu peso está um puco acima.';
        }else if(valorIMC < 35){
            classificacao = 'em Obesidade grau I. Comece a se cuidar!';
        }else if(valorIMC < 40){
            classificacao = 'em Obesidade grau II. Você vai Morrer se não se cuidar!';
        }else if(valorIMC > 40){
            classificacao = 'em Obesidade grau III. A morte já está atras de você!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;

        

    } else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }

}
calcular.addEventListener('click', imc);

'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')


    var className = documento.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
} );